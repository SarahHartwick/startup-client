import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  signingUrl: '/sign',

  filesDidChange (files) {
    const uploader = EmberUploader.S3Uploader.create({
      signingUrl: this.get('signingUrl')
    });

    uploader.on('didUpload', response => {
      // S3 will return XML with url
      let uploadedUrl = $(response).find('Location')[0].textContent;
      // http://yourbucket.s3.amazonaws.com/file.png
      uploadedUrl = decodeURIComponent(uploadedUrl);
      this.set('member.photo', uploadedUrl);
      let record = this.get('member');
      record.save();

    });

    if (!Ember.isEmpty(files)) {
      // Send a sign request then upload to S3
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]);
    }
  }
});
