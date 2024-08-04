import { useEffect } from 'react';

const preventPageRefresh = (): void => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Set a custom message
      const message = 'Are you sure you want to leave? You will be logged out!';
      event.returnValue = message; // Standard for most browsers
      return message; // For older versions of some browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

export default preventPageRefresh;
