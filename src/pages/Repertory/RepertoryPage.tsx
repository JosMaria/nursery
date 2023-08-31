import { RepertoryContent } from './content';

export const Component = () => (
  <>
    <RepertoryPage />
  </>
);

Component.displayName = 'RepertoryPage';

export const RepertoryPage = () => <RepertoryContent />;
