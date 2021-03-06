describe('Creating a message', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add the message to the list', async () => {
    await element(by.id('messageText')).typeText('New message');
    await element(by.id('saveButton')).tap();

    await expect(element(by.id('messageText'))).toHaveText('');
    await expect(element(by.text('New message'))).toBeVisible();
  });
});
