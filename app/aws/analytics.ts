import Analytics from '@aws-amplify/analytics';

import './configure';
import {
  setStorageItem,
  getStorageItem,
  removeStorageItem,
} from 'utils/storage';

const analyticsQueueKey = 'analytics-queue';
export class AppAnalytics {
  public static recordPageVisit(name: string) {
    if (navigator.onLine) {
      this.flushRecordsQueue();
      Analytics.record({ name: name });
    } else {
      this.addRecordToQueue(name);
    }
  }

  private static addRecordToQueue(name: string) {
    const analyticsQueue = this.decodeRecordsJSON(
      getStorageItem(analyticsQueueKey) || '[]',
    );
    analyticsQueue.push(name);
    setStorageItem(analyticsQueueKey, this.encodeRecordsJSON(analyticsQueue));
  }

  private static flushRecordsQueue() {
    const analyticsQueue = getStorageItem(analyticsQueueKey);
    if (analyticsQueue) {
      const records = this.decodeRecordsJSON(analyticsQueue);
      for (const record of records) {
        Analytics.record({ name: record });
      }
      removeStorageItem(analyticsQueueKey);
    }
  }

  private static decodeRecordsJSON(recordsJson: string) {
    return JSON.parse(recordsJson) as string[];
  }

  private static encodeRecordsJSON(records: string[]) {
    return JSON.stringify(records);
  }
}
