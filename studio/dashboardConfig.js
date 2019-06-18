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
                  buildHookId: '5d08425127efd035221cebde',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8m1vx4f5',
                  apiId: '477288fb-41d7-48de-bd8d-4d1b63e92127'
                },
                {
                  buildHookId: '5d08425127efd07c611cec47',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dfiwxobf',
                  apiId: 'f874a762-d395-4013-b249-0e73bfcb5760'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nrator/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dfiwxobf.netlify.com', category: 'apps'}
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
