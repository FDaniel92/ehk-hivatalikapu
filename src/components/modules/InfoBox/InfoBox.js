export default {
    name: 'InfoBox',
    props: {
      pictureSrc: String,
      pictureAlt: String,
      infoboxTitle: String,
      infoboxParagraph: String
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('@/assets/images');
        return images("./"+path)
      }
    }
  }