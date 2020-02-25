export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e547646b76fefea42b2f5ff',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mjjof2b8',
                  apiId: 'c1d419cf-37a0-48b2-b762-b1cbd9734bbc'
                },
                {
                  buildHookId: '5e54764612530e00868b8706',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-77am4eo8',
                  apiId: 'd782f2c1-139a-466e-a4b7-38891cd61489'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/B-bobkov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-77am4eo8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
