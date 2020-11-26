export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fbfca8499a34ec4096925bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-rw8paa2b',
                  apiId: 'cf4d22ae-69ef-4e0e-8252-1dafd5a85a96'
                },
                {
                  buildHookId: '5fbfca84b5d07eea17d867c2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-uiyfxb37',
                  apiId: '28070cc4-4901-4612-8353-7427e8b9828a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spatrik/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-uiyfxb37.netlify.app', category: 'apps'}
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
