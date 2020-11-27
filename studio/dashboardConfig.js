export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5fc10a1e330a585a22ac3019',
                  title: 'Sanity Studio',
                  name: 'caoimh-lab-studio',
                  apiId: '540c19ca-0e69-42eb-b950-32703e7cc3d5'
                },
                {
                  buildHookId: '5fc10a1eb5d07e04b6d86cb5',
                  title: 'Blog Website',
                  name: 'caoimh-lab',
                  apiId: '537049a6-b5f8-46c1-bb7d-c866cf4d7198'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caoimhinom/caoimh-lab',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://caoimh-lab.netlify.app', category: 'apps'}
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
