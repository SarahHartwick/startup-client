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
      label: '',
      valuePath: 'avatar',
      width: '30px',
      sortable: false,
      cellComponent: 'user-avatar'
    }, {
      label: 'First Name',
      valuePath: 'givenname',
      width: '80px'
    }, {
      label: 'Last Name',
      valuePath: 'lastname',
      width: '80px'
    }, {
      label: 'Email Address',
      valuePath: 'email',
      width: '100px'
    }, {
      label: 'Location',
      valuePath: 'location',
      width: '80px'
    }];
  }),

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },

  fetchRecords() {
    this.set('isLoading', true);
    this.get('store').query('user', this.getProperties(['page', 'limit', 'sort', 'dir'])).then(records => {
      this.get('table').addRows(records);
      this.set('isLoading', false);
      this.set('canLoadMore', !isEmpty(records));
    });
  },

  actions: {
    onScrolledToBottom() {
      if(this.get('canLoadMore')) {
        this.incrementProperty('page');
        this.fetchRecords();
      }
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
