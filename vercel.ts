import { type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  framework: 'nextjs',
  // Only deploy from the production branch. For any other ref (PR branches,
  // feature branches), exit 0 to tell Vercel to skip the build.
  //
  // exit 0 → skip build; non-zero → proceed with build.
  ignoreCommand:
    'bash -c \'if [ "$VERCEL_GIT_COMMIT_REF" = "main" ]; then exit 1; else exit 0; fi\'',
};
