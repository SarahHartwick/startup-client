import Ember from 'ember';
import Table from 'ember-light-table';

const { isEmpty, computed } = Ember;

export default Ember.Component.extend({
  page: 1,
  limit: 20,
  dir: 'asc',
  sort: null,
  table: null,
  isLoading: false,
  canLoadMore: true,

  columns: computed(function() {
    return [{
      label: 'Delete',
      valuePath: 'row',
      width: '10%',
      sortable: false,
      cellComponent: 'user-delete'
    }, {
      label: 'Name',
      valuePath: 'name',
      width: '20%',
    }, {
      label: 'Description',
      valuePath: 'description',
      width: '50%',
    },
    {
      label: 'Entrepreneur',
      valuePath: 'owner',
      width: '20%',
    }];
  }),

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },

  fetchRecords() {
    this.set('isLoading', true);
    let records = this.get('idea');
      this.get('table').addRows(records);
      this.set('isLoading', false);
      this.set('canLoadMore', !isEmpty(records));
  },

  actions: {
    onScrolledToBottom() {
      if(this.get('canLoadMore')) {
        this.incrementProperty('page');
        this.fetchRecords();
      }
    },

    rowClicked(row) {
      this.sendAction('rowClicked', row.content);
    },

    delete(row) {
      this.sendAction('delete', row.content);
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
          page: 1
        });
        this.get('table').setRows([]);
        this.fetchRecords();
      }
    }
  },
  store: Ember.inject.service('store'),
});
