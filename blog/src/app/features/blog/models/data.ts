export interface IBlogArticle {
  id: string;
  title: string;
  category: string;
  created_at: string;
  updated_at: string;
  featured_image: string;
  main_content: string;
}

export const data: IBlogArticle[] = [
  {
    id: '004780a2-5294-4672-a284-424bebfd8748',
    title: 'Consequatur et quisquam minus delectus tenetur.',
    category: 'Entertainment',
    created_at: 'Sun, 10/15/2023',
    updated_at: 'Sun, 10/15/2023',
    featured_image:
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8UGxhbnRzfGVufDB8MHx8fDE2OTczNTc1NjV8MA&ixlib=rb-4.0.3&q=85',
    main_content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, diam ut elementum vestibulum, felis quam pulvinar metus, at venenatis lacus nibh in leo. Vivamus urna mi, efficitur et molestie at, maximus vel odio. Suspendisse libero erat, porttitor nec sodales vel, porta eget magna. Donec dignissim, turpis eu viverra hendrerit, quam lectus posuere eros, ac ultricies odio leo et ex. Praesent nec congue lacus. Proin tincidunt, libero posuere efficitur blandit, felis enim semper mauris, nec aliquam nulla nulla eu lorem. Fusce maximus dui faucibus, auctor turpis ut, suscipit tellus. Aliquam euismod ex vel varius posuere. Sed quis ligula blandit, tincidunt diam ac, porttitor odio. Duis porttitor tellus sit amet velit semper feugiat. Fusce vestibulum lobortis urna, vitae convallis lacus interdum in. Sed fringilla, ante quis dignissim blandit, dolor nisl efficitur purus, mollis fringilla lorem elit commodo tellus. Donec dictum in dolor quis ultricies. Praesent luctus massa sollicitudin, ullamcorper sem sit amet, dignissim mauris.',
  },
  {
    id: '00535eb0-76c3-4f12-b1d2-93473cd5fe94',
    title: 'Nesciunt eligendi qui delectus quia blanditiis.',
    category: 'Food & Drink',
    created_at: 'Tue, 9/12/2023',
    updated_at: 'Tue, 9/12/2023',
    featured_image:
      'https://images.unsplash.com/photo-1604213410393-89f141bb96b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw0fHxKdW5nbGV8ZW58MHwwfHx8MTY5NzM1NzU0MHww&ixlib=rb-4.0.3&q=85',
    main_content:
      'Morbi maximus lectus ac turpis tincidunt ullamcorper. Suspendisse fermentum elementum dui. Integer felis eros, dapibus sit amet porta id, euismod at lectus. Aliquam quis posuere magna, sit amet vulputate arcu. Praesent quis ante quis diam sollicitudin cursus quis id dui. Mauris efficitur porttitor luctus. Integer lectus ligula, gravida id tristique bibendum, rhoncus sed sapien. Pellentesque semper mollis magna at viverra. Integer ut odio eget erat ullamcorper maximus. Proin posuere felis quis arcu tristique egestas. Aliquam vel suscipit nibh. Etiam porttitor nisl posuere nisl vestibulum bibendum. Donec laoreet nulla nisl, suscipit dignissim tellus sagittis venenatis. Mauris pharetra arcu nec velit efficitur sollicitudin. Quisque eu accumsan sapien. Nullam id faucibus nisl, non tincidunt neque.',
  },
  {
    id: '006ad48b-e9d9-472e-bcc0-39961ef18eba',
    title: 'Quae praesentium consequatur vel eligendi iste nisi.',
    category: 'Fashion & Beauty',
    created_at: 'Mon, 24/01/2023',
    updated_at: 'Mon, 24/01/2023',
    featured_image:
      'https://images.unsplash.com/photo-1542349314-b0ceb4d90f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMXx8Q2xvdWRzfGVufDB8MHx8fDE2OTczNTc1NjZ8MA&ixlib=rb-4.0.3&q=85',
    main_content:
      'Aenean sed ex in nibh fringilla feugiat ac eget massa. Cras lacinia rutrum volutpat. Aenean fringilla est nec sapien maximus mollis. Praesent id libero urna. Ut condimentum sem felis. Nunc massa ex, dapibus sed tincidunt et, aliquet et libero. Vivamus et tortor dui. Mauris vestibulum enim sed lorem sollicitudin condimentum. Maecenas id viverra lectus, eu blandit est',
  },
  {
    id: '00caf75b-0d8f-441c-ae04-1dd25a790683',
    title: 'Sunt et rerum aspernatur praesentium.',
    category: 'Art & Culture',
    created_at: 'Fri, 8/07/2023',
    updated_at: 'Fri, 8/07/2023',
    featured_image:
      'https://images.unsplash.com/photo-1495580847032-db0bac41d44b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyNHx8Q2FueW9ufGVufDB8MHx8fDE2OTczNTc1NDR8MA&ixlib=rb-4.0.3&q=85',
    main_content:
      'Sed placerat quis ipsum sit amet tincidunt. Maecenas finibus ligula eu volutpat semper. Aliquam hendrerit elit nibh, in porttitor justo sollicitudin eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quam vel porta pulvinar. Cras lacus quam, maximus vitae sem a, porta tristique justo. Integer consectetur efficitur erat. Donec lobortis pretium neque elementum rutrum. Integer condimentum, tortor ut accumsan rhoncus, nisl ligula blandit mauris, cursus ultricies ante lorem ac ligula.',
  },
];
