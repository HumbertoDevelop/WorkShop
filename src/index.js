import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import store from "./Redux/store";
import './index.css';

/* 
{
  "especialidades": [
    {
      "id": 1,
      "name": "json-server",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 2,
      "name": "Typescript",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "name": "Typescript",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 4,
      "name": "Typescript",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 5,
      "name": "Typescript",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 6,
      "name": "Typescript",
      "picture": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ],
  "profesores": [
    {
      "id": 1,
      "name": "Humberto García",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "UX Design"
    },
    {
      "id": 2,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "JAVA"
    },
    {
      "id": 3,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "JavaScript"
    },
    {
      "id": 4,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "Idiomas"
    },
    {
      "id": 5,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "Python"
    },
    {
      "id": 6,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "SQL"
    },
    {
      "id": 7,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "PHP"
    },
    {
      "id": 8,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "RUBY & RAILS"
    },
    {
      "id": 9,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "Games Designer"
    },
    {
      "id": 10,
      "name": "Daniel Moya",
      "country": "Venezuela",
      "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
      "speciality": "Network Security"
    }
  ],
  "cursos": [
    {
      "id": 1,
      "name": "typicode",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 2,
      "name": "typescript",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 4,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 5,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 6,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 7,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 8,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 9,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 10,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 11,
      "name": "Angular",
      "category": "Programación",
      "content": "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      "picture": "https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ],
  "signup": [
    {
      "email": "humbertodev14@gmail.com",
      "name": "Humberto García",
      "password": "25877089",
      "id": 1
    },
    {
      "email": "dani@gmail.com",
      "name": "dani",
      "password": "123",
      "id": 2
    },
    {
      "email": "lysblancherose@gmail.com",
      "name": "Leovelys Rosas",
      "password": "12345",
      "id": 3
    },
    {
      "email": "leogarciadj@gmail.com",
      "name": "Leonardo",
      "password": "159",
      "id": 4
    }
  ],
  "posts": [
    {
      "id": 1,
      "author": "Jose Millan",
      "title": "Ayuda con CSS grid Urgente!!",
      "fecha": "20",
      "fechaM": "Mar",
      "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
    },
    {
      "id": 2,
      "author": "Jose Vergara",
      "title": "Ayuda con CSS grid Urgente!!",
      "fecha": "10",
      "fechaM": "Feb",
      "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
    },
    {
      "id": 3,
      "author": "Pablo Millan",
      "title": "Ayuda con JAVA Urgente!!",
      "fecha": "20",
      "fechaM": "Jul",
      "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
    },
    {
      "id": 4,
      "author": "Lenny Perez",
      "title": "Ayuda con HTML Urgente!!",
      "fecha": "10",
      "fechaM": "Dec",
      "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
    }
  ]
}

*/
render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
