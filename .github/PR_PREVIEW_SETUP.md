# PR Preview Deployment Setup

This repository uses automated PR preview deployments to allow contributors and reviewers to see changes before merging.

## How It Works

When a pull request is opened or updated:
1. The `preview.yml` workflow builds the Astro site with a PR-specific base path
2. The built site is deployed to the `gh-pages` branch under `pr-{number}/` directory
3. A comment is posted on the PR with the preview URL: `https://zwindler.github.io/101-ways-to-deploy-kubernetes/pr-{number}/`

When a pull request is closed:
1. The preview directory is removed from the `gh-pages` branch
2. A cleanup notification comment is posted

## GitHub Pages Configuration

**Important**: GitHub Pages must be configured to deploy from the `gh-pages` branch for PR previews to work.

### Configuration Steps

1. Go to repository Settings → Pages
2. Under "Build and deployment", set:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `/ (root)`
3. Save the configuration

This allows both the main site (deployed to root of gh-pages) and PR previews (deployed to `pr-{number}/` subdirectories) to be served from the same branch.

## Security Considerations

### Workflow Approval for First-Time Contributors

GitHub Actions provides built-in security for workflows triggered by first-time contributors:

- **First-time contributors**: Workflows require manual approval from a repository maintainer
- **Returning contributors**: Workflows run automatically after first approval
- **Repository collaborators**: Workflows run automatically without approval

This means:
- ✅ Malicious actors cannot automatically run workflows through PRs
- ✅ Maintainers review all workflows from new contributors before they run
- ✅ Trusted contributors don't face delays after initial approval

### What Gets Approved

When you approve a workflow for a first-time contributor, you're approving:
- The workflow code in the PR
- The build and deployment process
- Any scripts or commands that will run

**Best Practice**: Always review the PR changes before approving workflows, especially:
- Changes to workflow files (`.github/workflows/`)
- Changes to build scripts (`package.json`, build configs)
- New dependencies that could execute code during build

### Preview Deployment Security

PR previews are safe because:
- They only deploy static HTML/CSS/JS files (no server-side code execution)
- They're isolated in subdirectories (`pr-{number}/`)
- They don't have access to production data or secrets
- They're automatically cleaned up when the PR closes

### Additional Security Features

1. **Branch Protection**: The workflow only triggers for PRs targeting `main`
2. **Limited Permissions**: Workflows have minimal required permissions
3. **Cleanup**: Preview directories are automatically removed when PRs close
4. **Isolation**: Each PR preview is in its own subdirectory

## Workflow Files

- **`.github/workflows/preview.yml`**: Handles PR preview deployment and cleanup
- **`.github/workflows/deploy.yml`**: Handles main site deployment to gh-pages root

## Troubleshooting

### Preview URL returns 404

1. **Check GitHub Pages settings**: Ensure it's configured to deploy from `gh-pages` branch
2. **Check workflow run**: Verify the workflow completed successfully
3. **Check gh-pages branch**: Verify the `pr-{number}` directory exists
4. **Wait a moment**: GitHub Pages may take 1-2 minutes to update after deployment

### Preview not updating

1. Check that the workflow ran successfully for the latest commit
2. Clear your browser cache
3. Wait 1-2 minutes for GitHub Pages to propagate changes

### Cleanup didn't work

If a preview directory isn't removed when a PR closes:
1. Manually delete it from the gh-pages branch
2. Check the workflow logs for errors
3. Ensure the cleanup job has proper permissions

## Technical Details

### Main Deployment (deploy.yml)

- Triggers on push to `main` branch
- Builds the site with default base path `/101-ways-to-deploy-kubernetes`
- Deploys to root of `gh-pages` branch
- Uses `keep_files: true` to preserve PR preview directories

### PR Preview Deployment (preview.yml)

- Triggers on PR open, update, or close events
- Builds with custom base path `/101-ways-to-deploy-kubernetes/pr-{number}`
- Deploys to `pr-{number}/` subdirectory on `gh-pages` branch  
- Uses `keep_files: true` to preserve other previews and main site
- Posts/updates comment with preview URL
- Cleans up preview on PR close

### Environment Variables

- `PUBLIC_BASE_PATH`: Custom base path for building PR previews (set in workflow)
- Default: `/101-ways-to-deploy-kubernetes` (from `astro.config.mjs`)
