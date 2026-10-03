import { useEffect } from 'react';

/* Same page titles as the original WordPress site ("about – Dr Ghulam Ali", ...). */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} – Dr Ghulam Ali` : 'Dr Ghulam Ali';
  }, [title]);
}
