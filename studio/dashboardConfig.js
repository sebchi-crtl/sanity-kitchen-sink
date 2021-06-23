export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d32297bd8cd51e0fe086fd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-caz3sixy',
                  apiId: 'd4f835a9-a3fc-4e98-a014-1b680cfc2755'
                },
                {
                  buildHookId: '60d32297db54301b19586fcd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9pnc2s6z',
                  apiId: '8d7ab302-05d9-40ce-b3ba-234d93a8188b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sebchi-crtl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9pnc2s6z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
