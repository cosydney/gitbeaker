describe('API Map', () => {
  it('should return object representing all resources in JSON format', async () => {
    const keys = [
      'Agents',
      'AlertManagement',
      'ApplicationAppearance',
      'ApplicationPlanLimits',
      'Applications',
      'ApplicationSettings',
      'ApplicationStatistics',
      'AuditEvents',
      'Avatar',
      'BroadcastMessages',
      'Composer',
      'Conan',
      'DashboardAnnotations',
      'Debian',
      'DependencyProxy',
      'DeployKeys',
      'DeployTokens',
      'DockerfileTemplates',
      'Events',
      'Experiments',
      'GeoNodes',
      'GitignoreTemplates',
      'GitLabCIYMLTemplates',
      'Import',
      'InstanceLevelCICDVariables',
      'Keys',
      'License',
      'LicenseTemplates',
      'Lint',
      'Markdown',
      'Maven',
      'Metadata',
      'Migrations',
      'Namespaces',
      'NotificationSettings',
      'NPM',
      'NuGet',
      'PersonalAccessTokens',
      'PyPI',
      'RubyGems',
      'Search',
      'ServiceData',
      'SidekiqMetrics',
      'SidekiqQueues',
      'SnippetRepositoryStorageMoves',
      'Snippets',
      'Suggestions',
      'SystemHooks',
      'TodoLists',
      'Topics',
      'Branches',
      'CommitDiscussions',
      'Commits',
      'ContainerRegistry',
      'Deployments',
      'Environments',
      'ErrorTrackingClientKeys',
      'ErrorTrackingSettings',
      'ExternalStatusChecks',
      'FeatureFlags',
      'FeatureFlagUserLists',
      'FreezePeriods',
      'GitlabPages',
      'GoProxy',
      'Helm',
      'Integrations',
      'IssueAwardEmojis',
      'IssueDiscussions',
      'IssueIterationEvents',
      'IssueLabelEvents',
      'IssueLinks',
      'IssueMilestoneEvents',
      'IssueNoteAwardEmojis',
      'IssueNotes',
      'Issues',
      'IssuesStatistics',
      'IssueStateEvents',
      'IssueWeightEvents',
      'JobArtifacts',
      'Jobs',
      'MergeRequestApprovals',
      'MergeRequestAwardEmojis',
      'MergeRequestContextCommits',
      'MergeRequestDiscussions',
      'MergeRequestLabelEvents',
      'MergeRequestMilestoneEvents',
      'MergeRequestDraftNotes',
      'MergeRequestNotes',
      'MergeRequests',
      'MergeTrains',
      'PackageRegistry',
      'Packages',
      'PagesDomains',
      'Pipelines',
      'PipelineSchedules',
      'PipelineScheduleVariables',
      'PipelineTriggerTokens',
      'ProductAnalytics',
      'ProjectAccessRequests',
      'ProjectAccessTokens',
      'ProjectAliases',
      'ProjectBadges',
      'ProjectCustomAttributes',
      'ProjectDORA4Metrics',
      'ProjectHooks',
      'ProjectImportExport',
      'ProjectInvitations',
      'ProjectIssueBoards',
      'ProjectIterations',
      'ProjectLabels',
      'ProjectMembers',
      'ProjectMilestones',
      'ProjectProtectedEnvironments',
      'ProjectPushRules',
      'ProjectRelationsExport',
      'ProjectReleases',
      'ProjectRemoteMirrors',
      'ProjectRepositoryStorageMoves',
      'Projects',
      'ProjectSnippetAwardEmojis',
      'ProjectSnippetDiscussions',
      'ProjectSnippetNotes',
      'ProjectSnippets',
      'ProjectStatistics',
      'ProjectTemplates',
      'ProjectVariables',
      'ProjectVulnerabilities',
      'ProjectWikis',
      'ProtectedBranches',
      'ProtectedTags',
      'ReleaseLinks',
      'Repositories',
      'RepositoryFiles',
      'RepositorySubmodules',
      'ResourceGroups',
      'Runners',
      'SecureFiles',
      'Tags',
      'UserStarredMetricsDashboard',
      'EpicAwardEmojis',
      'EpicDiscussions',
      'EpicIssues',
      'EpicLabelEvents',
      'EpicLinks',
      'EpicNotes',
      'Epics',
      'GroupAccessRequests',
      'GroupAccessTokens',
      'GroupActivityAnalytics',
      'GroupBadges',
      'GroupCustomAttributes',
      'GroupDORA4Metrics',
      'GroupHooks',
      'GroupImportExports',
      'GroupInvitations',
      'GroupIssueBoards',
      'GroupIterations',
      'GroupLabels',
      'GroupLDAPLinks',
      'GroupMembers',
      'GroupMemberRoles',
      'GroupMilestones',
      'GroupProtectedEnvironments',
      'GroupPushRules',
      'GroupRelationExports',
      'GroupReleases',
      'GroupRepositoryStorageMoves',
      'Groups',
      'GroupSAMLIdentities',
      'GroupSCIMIdentities',
      'GroupVariables',
      'GroupWikis',
      'LinkedEpics',
      'UserCustomAttributes',
      'UserEmails',
      'UserGPGKeys',
      'UserImpersonationTokens',
      'Users',
      'UserSSHKeys',
    ];
    // eslint-disable-next-line
    const map: Record<string, unknown> = await import('../../dist/map.json');

    expect(map).toBeInstanceOf(Object);
    expect(Object.keys(map)).toIncludeAllMembers(keys);
  });
});
