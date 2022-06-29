var app = new Vue({
   // Element
   el: '#app',

   // Data
   data() {
      return {

         listBusinessAccount : [
            {
               id: 255697,
               name: 'Account 1'
            },
            {
               id: 582235,
               name: 'Account 2'
            },
            {
               id: 9789564,
               name: 'Account 3'
            },
            {
               id: 524756,
               name: 'Account 4'
            }
         ],

         listPixelAccount : [
            {
               id: 1,
               parentId: 255697,
               name: 'Pixel 1'
            },
            {
               id: 2,
               parentId: 582235,
               name: 'Pixel 2'
            },
            {
               id: 3,
               parentId: 582235,
               name: 'Pixel 3'
            },
            {
               id: 4,
               parentId: 255697,
               name: 'Pixel 4'
            },
            {
               id: 5,
               parentId: 9789564,
               name: 'Pixel 5'
            },
            {
               id: 6,
               parentId: 255697,
               name: 'Pixel 6'
            },
            {
               id: 7,
               parentId: 582235,
               name: 'Pixel 7'
            },
            {
               id: 8,
               parentId: 9789564,
               name: 'Pixel 8'
            },
            {
               id: 9,
               parentId: 255697,
               name: 'Pixel 9'
            },
            {
               id: 10,
               parentId: 582235,
               name: 'Pixel 10'
            },
            {
               id: 11,
               parentId: 9789564,
               name: 'Pixel 11'
            },
            {
               id: 12,
               parentId: 255697,
               name: 'Pixel 12'
            }
         ],

         // form menu (Auto or Manual)
         formMenu: "auto",

         // business select value (auto form)
         businessSelected : "",

         // pixel select value (auto form)
         pixelSelected : "",

         // Name pixel input (manual form)
         pixelNameInput : "",

         // Facebook pixel ID input (manual form)
         pixemIdInput : "",

         // array of pixel correct with the parentId
         pixelArrayCorrectParentId: [],


      }
   },

   // Methods
   methods: {

      // when business account select tag changes value (auto form)
      onChangeBusiness: function() {
         let pixelSelect = document.querySelector("#pixel");
         if(this.businessSelected) {
            let businessErrMes = document.querySelector("#businessErrMes");
            if(businessErrMes.style.display = "flex") {
               businessErrMes.style.display = "none";
            }
            this.pixelArrayCorrectParentId = [];
            pixelSelect.removeAttribute('disabled');
            this.listPixelAccount.forEach(el => {
               if(el.parentId == this.businessSelected) {
                  this.pixelArrayCorrectParentId.push(el);
               }
            })
         }
      },

      // when pixel select tag changes value (auto form)
      onChangePixel: function() {
         if(this.pixelSelected) {
            document.querySelector("#pixelErrMes").style.display = "none";
         }
      },

      // when pixel name field changes value (manuel form)
      onChangePixelName: function() {
         if(this.pixelNameInput) {
            document.querySelector("#nameFieldErrMesEmpty").style.display = "none";
            if(!this.validatePixelName(this.pixelNameInput)) {
               document.querySelector("#nameFieldErrMesType").style.display = "flex";
            } else {
               document.querySelector("#nameFieldErrMesType").style.display = "none";
            }
         }
      },

      // when pixel facebook ID field changes value (manuel form)
      onChangePixelId: function() {
         if(this.pixemIdInput) {
            document.querySelector("#pixelIdFieldErrMes").style.display = "none";
            if(!this.validatePixelId(this.pixemIdInput)) {
               document.querySelector("#pixelIdFieldErrMesType").style.display = "flex";
            } else {
               document.querySelector("#pixelIdFieldErrMesType").style.display = "none";
            }
         }
      },

      // when hit the button save the end of form
      onClick: function() {
         let autoForm = document.querySelector("#auto-form");
         let manualForm = document.querySelector("#manual-form");

         if(autoForm) {
            if(!this.businessSelected) {
               document.querySelector("#businessErrMes").style.display = "flex";
            }
            if(!this.pixelSelected) {
               document.querySelector("#pixelErrMes").style.display = "flex";
            }
         } else if(manualForm) {
            if(!this.pixelNameInput) {
               document.querySelector("#nameFieldErrMesEmpty").style.display = "flex";
            }
            if(!this.pixemIdInput) {
               document.querySelector("#pixelIdFieldErrMes").style.display = "flex";
            }
         }

      },

      // when hit button cancel the end of form - reset form
      onReset: function() {
         let autoForm = document.querySelector("#auto-form");
         let manualForm = document.querySelector("#manual-form");

         if(autoForm) {
            this.businessSelected = "";
            this.pixelSelected = "";
            document.querySelector("#pixel").setAttribute('disabled', '');
            document.querySelector("#businessErrMes").style.display = "none";
            document.querySelector("#pixelErrMes").style.display = "none";
         }

         else if (manualForm) {
            this.pixelNameInput = "";
            this.pixemIdInput = "";
            document.querySelector("#nameFieldErrMesEmpty").style.display = "none";
            document.querySelector("#nameFieldErrMesType").style.display = "none";
            document.querySelector("#pixelIdFieldErrMes").style.display = "none";
            document.querySelector("#pixelIdFieldErrMesType").style.display = "none";
         }

      },
      
      // validate Pixel name field
      validatePixelName: function(result) {
         let nameRegex = /^[a-zA-Z ]+$/g;
         return nameRegex.exec(result);
      },
   
      // validate Pixel ID field
      validatePixelId: function(result) {
         let nameRegex = /^[0-9 ]+$/g;
         return nameRegex.exec(result);
      },
      
   },
   
   // Computed
   computed: {

   }

});