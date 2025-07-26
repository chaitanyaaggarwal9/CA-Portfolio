
"use client"

import { useEffect } from 'react';
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from '@/lib/firebase';

export function GoogleAnalytics() {
  useEffect(() => {
    isSupported().then(supported => {
      if (supported) {
        getAnalytics(app);
      }
    });
  }, []);

  return null;
}
