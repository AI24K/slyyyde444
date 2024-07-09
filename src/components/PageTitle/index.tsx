import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · SLYYYDE CHAT` : 'SLYYYDE CHAT';
  }, [title]);

  return null;
});

export default PageTitle;
