import { describe, it, expect } from '@jest/globals';
import { required, isUrl, isPath, validateApp, validateApi, validateWebhook } from '../assets/utils/validators.js';

describe('NetAPI validators', () => {
  it('required', () => {
    expect(required('')).toBe(false);
    expect(required('ok')).toBe(true);
  });
  it('isUrl', () => {
    expect(isUrl('https://hooks.example.local/x')).toBe(true);
    expect(isUrl('not-a-url')).toBe(false);
  });
  it('isPath', () => {
    expect(isPath('/api/v1/devices')).toBe(true);
    expect(isPath('api/v1')).toBe(false);
  });
  it('validateApp', () => {
    expect(validateApp({ name: '', redirect: 'bad' }).name).toBeTruthy();
  });
  it('validateApi', () => {
    expect(validateApi({ name: 'List', path: '/api/v1/x' })).toEqual({});
  });
  it('validateWebhook', () => {
    expect(validateWebhook({ name: 'H', url: 'https://x.local/h' })).toEqual({});
  });
});
// coverage note
