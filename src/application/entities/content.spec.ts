import { Content } from './content';

describe('Notification content', () => {
  it('should to be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should to not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should to not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
