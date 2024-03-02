import { axiosInstance } from '../../../../config';

export const uploadPicture = async (plantId: number, file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('picture', file);

  const { data } = await axiosInstance.post<string>(`plants/picture/${plantId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

// const plantMock = {
//   photos_URL: ['url3', 'url1', 'url2'],
//   id: 1,
//   commonName: 'flor de navidad',
//   scientificName: 'flor de navidad',
//   scientistLastnameInitial: null,
//   family: 'euphorbiaceae',
//   status: 'AVAILABLE',
//   classifications: ['ORNAMENTAL', 'INDUTRIAL', 'CACTUS'],
//   description:
//     'Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Lectus magna fringilla urna porttitor. Ullamcorper dignissim cras tincidunt lobortis feugiat. Sed viverra ipsum nunc aliquet. Convallis posuere morbi leo urna molestie at. Mauris a diam maecenas sed enim ut sem. Vel facilisis volutpat est velit egestas dui id ornare arcu. Suscipit tellus mauris a diam maecenas sed enim ut sem. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Sed arcu non odio euismod lacinia. Commodo viverra maecenas accumsan lacus. Gravida quis blandit turpis cursus in hac habitasse. Sit amet luctus venenatis lectus magna fringilla.',
//   notes: [
//     'Purus semper eget duis at. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nisi porta lorem mollis aliquam ut. Sit amet venenatis urna cursus eget nunc. Praesent tristique magna sit amet purus. Purus sit amet luctus venenatis. Leo in vitae turpis massa sed. Ac tortor dignissim convallis aenean. Nibh sed pulvinar proin gravida. Nec sagittis aliquam malesuada bibendum arcu vitae. Sed blandit libero volutpat sed cras ornare. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Suspendisse ultrices gravida dictum fusce ut. Facilisi nullam vehicula ipsum a arcu cursus.',
//     'Aliquet bibendum enim facilisis gravida neque. Curabitur vitae nunc sed velit dignissim sodales ut. Vulputate dignissim suspendisse in est ante. Integer feugiat scelerisque varius morbi enim nunc. Amet nulla facilisi morbi tempus iaculis urna id. In aliquam sem fringilla ut morbi tincidunt. Ornare arcu odio ut sem nulla pharetra diam sit amet. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Aliquet sagittis id consectetur purus ut faucibus pulvinar.',
//     'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus ornare suspendisse sed nisi. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Lacinia at quis risus sed vulputate odio ut. Vel facilisis volutpat est velit egestas dui id ornare. Egestas integer eget aliquet nibh praesent tristique. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Augue ut lectus arcu bibendum at varius.',
//   ],
//   details: [
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam elementum pulvinar. Risus at ultrices mi tempus.',
//     'Risus nec feugiat in fermentum posuere urna nec. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Mollis aliquam ut porttitor leo. Egestas purus viverra accumsan in nisl. Integer quis auctor elit sed vulputate mi sit amet. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Odio ut sem nulla pharetra diam sit. Convallis a cras semper auctor neque vitae tempus. Eget aliquet nibh praesent tristique. Auctor elit sed vulputate mi sit.',
//   ],
//   technicalSheet: [
//     {
//       word: 'Enfermedades',
//       info: 'bacterianas y virosis',
//     },
//     {
//       word: 'Fertilización',
//       info: 'Abonar una vez cada 15 días con un fertilizante líquido para plantas de flor, durante primavera y verano.',
//     },
//     {
//       word: 'Floración',
//       info: 'Las flores insignificantes; el espádice, que a menudo se confunde con la flor, puede ser amarillo, rojo, purpúreo, verde manzana, rosa intenso, casi anaranjado, blancas y negras.',
//     },
//     {
//       word: 'Origen',
//       info: 'Zonas tropicales y subtropicales de América.',
//     },
//     {
//       word: 'Otros',
//       info: 'se comercializa por macetas',
//     },
//     {
//       word: 'Poda',
//       info: 'Es de crecimiento compacto, por lo que las podas únicamente se realizan cuando se cosechan las flores. Plagas y enfermedades: Araña roja, Trips, Mosca blanca, orugas, pulgones, nematodos, cochinillas, caracoles. Podredumbre radicular. Antracnosis y Septoria.',
//     },
//     {
//       word: 'Propagación',
//       info: 'Por semillas, vegetativa y por tejidos vegetales.',
//     },
//     {
//       word: 'Suelo',
//       info: 'Bien aireados y drenados, con un pH óptimo en 5.7. Riego: En Verano unas 3 veces a la semana, en invierno 1 vez por semana.',
//     },
//     {
//       word: 'Tamaño',
//       info: 'Hasta 0.7 m de altura.',
//     },
//     {
//       word: 'Tratamientos Fitosanitarios',
//       info: '',
//     },
//     {
//       word: 'Ubicación',
//       info: 'Planta de sombra o media sombra, no resiste los rayos directos del sol, ni los descensos bruscos de temperatura.',
//     },
//   ],
// };

// type PlantResponseType = {
//   photos_URL: string[];
//   id: number;
//   commonName: string;
//   scientificName: string;
//   scientistLastnameInitial: null;
//   family: string;
//   status: StatusType;
//   classifications: string[];
//   description: string;
//   notes: string[];
//   details: string[];
//   technicalSheet: {
//     word: string;
//     info: string;
//   }[];
// };

// const plants = [plantMock];

// export const fetchPlantById = async (id: number): Promise<PlantResponseType> => {
//   const data = plants.find((plant) => plant.id === id) ?? ({} as PlantResponseType);
//   console.log(data);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 0);
//   });
// };
