import React from 'react';
import ProfileCard from './';

export default {
  title: 'atoms/ProfileCard',
  component: ProfileCard,
  argTypes: {
    addToCart: {
      action: 'addToCart',
    },
  },
};

const Template = (args) => {
  return <ProfileCard {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  id: 94498635,
  node_id: 'MDEwOlJlcG9zaXRvcnk5NDQ5ODYzNQ==',
  name: 'carbon',
  full_name: 'carbon-app/carbon',
  private: false,
  owner: {
    login: 'carbon-app',
    id: 52179379,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjUyMTc5Mzc5',
    avatar_url: 'https://avatars.githubusercontent.com/u/52179379?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/carbon-app',
    html_url: 'https://github.com/carbon-app',
    followers_url: 'https://api.github.com/users/carbon-app/followers',
    following_url:
      'https://api.github.com/users/carbon-app/following{/other_user}',
    gists_url: 'https://api.github.com/users/carbon-app/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/carbon-app/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/carbon-app/subscriptions',
    organizations_url: 'https://api.github.com/users/carbon-app/orgs',
    repos_url: 'https://api.github.com/users/carbon-app/repos',
    events_url: 'https://api.github.com/users/carbon-app/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/carbon-app/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/carbon-app/carbon',
  description:
    ':black_heart: Create and share beautiful images of your source code',
  fork: false,
  url: 'https://api.github.com/repos/carbon-app/carbon',
  forks_url: 'https://api.github.com/repos/carbon-app/carbon/forks',
  keys_url: 'https://api.github.com/repos/carbon-app/carbon/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/carbon-app/carbon/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/carbon-app/carbon/teams',
  hooks_url: 'https://api.github.com/repos/carbon-app/carbon/hooks',
  issue_events_url:
    'https://api.github.com/repos/carbon-app/carbon/issues/events{/number}',
  events_url: 'https://api.github.com/repos/carbon-app/carbon/events',
  assignees_url:
    'https://api.github.com/repos/carbon-app/carbon/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/carbon-app/carbon/branches{/branch}',
  tags_url: 'https://api.github.com/repos/carbon-app/carbon/tags',
  blobs_url: 'https://api.github.com/repos/carbon-app/carbon/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/carbon-app/carbon/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/carbon-app/carbon/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/carbon-app/carbon/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/carbon-app/carbon/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/carbon-app/carbon/languages',
  stargazers_url: 'https://api.github.com/repos/carbon-app/carbon/stargazers',
  contributors_url:
    'https://api.github.com/repos/carbon-app/carbon/contributors',
  subscribers_url: 'https://api.github.com/repos/carbon-app/carbon/subscribers',
  subscription_url:
    'https://api.github.com/repos/carbon-app/carbon/subscription',
  commits_url: 'https://api.github.com/repos/carbon-app/carbon/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/carbon-app/carbon/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/carbon-app/carbon/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/carbon-app/carbon/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/carbon-app/carbon/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/carbon-app/carbon/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/carbon-app/carbon/merges',
  archive_url:
    'https://api.github.com/repos/carbon-app/carbon/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/carbon-app/carbon/downloads',
  issues_url: 'https://api.github.com/repos/carbon-app/carbon/issues{/number}',
  pulls_url: 'https://api.github.com/repos/carbon-app/carbon/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/carbon-app/carbon/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/carbon-app/carbon/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/carbon-app/carbon/labels{/name}',
  releases_url: 'https://api.github.com/repos/carbon-app/carbon/releases{/id}',
  deployments_url: 'https://api.github.com/repos/carbon-app/carbon/deployments',
  created_at: '2017-06-16T02:50:28Z',
  updated_at: '2021-01-22T07:27:37Z',
  pushed_at: '2021-01-21T03:29:40Z',
  git_url: 'git://github.com/carbon-app/carbon.git',
  ssh_url: 'git@github.com:carbon-app/carbon.git',
  clone_url: 'https://github.com/carbon-app/carbon.git',
  svn_url: 'https://github.com/carbon-app/carbon',
  homepage: 'https://carbon.now.sh',
  size: 18508,
  stargazers_count: 26341,
  watchers_count: 26341,
  language: 'JavaScript',
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 1406,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 21,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz',
  },
  forks: 1406,
  open_issues: 21,
  watchers: 26341,
  default_branch: 'main',
  score: 1.0,
};
