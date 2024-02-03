import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'dcd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4c4'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b65'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '927'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c02'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '741'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '267'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '481'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '56f'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9c9'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c6b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bec'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f1d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1c8'),
            routes: [
              {
                path: '/category/advanced',
                component: ComponentCreator('/category/advanced', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/basic',
                component: ComponentCreator('/category/basic', '0d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/expert',
                component: ComponentCreator('/category/expert', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/intermediate',
                component: ComponentCreator('/category/intermediate', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/mineflayer',
                component: ComponentCreator('/category/mineflayer', '39d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/novice',
                component: ComponentCreator('/category/novice', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/snippets',
                component: ComponentCreator('/category/snippets', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/advanced/intro',
                component: ComponentCreator('/mineflayer/advanced/intro', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/basic/createBot',
                component: ComponentCreator('/mineflayer/basic/createBot', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/basic/intro',
                component: ComponentCreator('/mineflayer/basic/intro', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/expert/intro',
                component: ComponentCreator('/mineflayer/expert/intro', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/intermediate/intro',
                component: ComponentCreator('/mineflayer/intermediate/intro', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/intro',
                component: ComponentCreator('/mineflayer/intro', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mineflayer/novice/intro',
                component: ComponentCreator('/mineflayer/novice/intro', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/armor',
                component: ComponentCreator('/snippets/armor', '72f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/attack',
                component: ComponentCreator('/snippets/attack', 'dc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/block_break',
                component: ComponentCreator('/snippets/block_break', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/block_place',
                component: ComponentCreator('/snippets/block_place', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/buckets',
                component: ComponentCreator('/snippets/buckets', '87f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/cuboid_mining',
                component: ComponentCreator('/snippets/cuboid_mining', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/snippets/onMsaCode',
                component: ComponentCreator('/snippets/onMsaCode', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
