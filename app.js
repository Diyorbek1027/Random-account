// const app = new Vue({
//     el:"#app",

    // data:{
    //     name: "Akmal",
    //     age: 20,
    //     jinsi:"Erkak",
    //     raqam:"+998901201027"
    // }

//     data(){
//         return{
//             name: "Akmal",
//             age: 20,
//             jinsi:"Erkak",
//             list: true,
//             website: "https://kun.uz"
//         }
//     },

//   methods:{
//         getAge(age){
//             this.age = age;
//         },
//         click(){
//             alert("kun.uz");
//         }
//     }


// });


const app = Vue.createApp({
    // template: "<h1>Hello Vue {{name}}</h1>",

    data(){
        return{
           first:"Sardor",
           last:"Aakmalov",
           email:"asd@gamil.com",
           gender:"female",
           
            photo:"https://randomuser.me/api/portraits/women/79.jpg",
        };
    },
        methods: {
          async  getUser(){
                //console.log(this.first);
                const rand = await fetch('https://randomuser.me/api');


                const {results} = await rand.json();

                // console.log(results);
                this.first = results[0].name.first,
                this.last = results[0].name.last,
                this.email =results[0].email,
                this.gender = results[0].gender,
                this.photo = results[0].picture.large
            }
        }
});

app.mount("#app")
