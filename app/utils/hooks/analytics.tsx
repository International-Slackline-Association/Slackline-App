import { useState, useEffect } from 'react';
import { AppAnalytics } from 'aws/analytics';

export function useVisitAnalytics(name: string) {
  useEffect(() => {
    AppAnalytics.recordPageVisit(name);
  }, []);
}
