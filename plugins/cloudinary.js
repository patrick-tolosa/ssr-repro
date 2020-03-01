import Vue from 'vue';
import Cloudinary from 'cloudinary-vue'; // does not work, throws the error
// import Cloudinary from 'cloudinary-vue/dist/Cloudinary.umd'; // works

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "patrick-tolosa"
  }
});
