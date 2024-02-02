import createWrapperAndAppendToBody from './create-wrapper-and-append-to-body';

describe('TESTING createWrapperAndAppendToBody function', () => {
  describe('GIVEN a wrapper-id', () => {
    const wrapperId = `wrapper-${Math.random()}`;
    const wrapperElement = createWrapperAndAppendToBody(wrapperId);

    it('THEN it should create a wrapper element with the specified ID', () => {
      expect(wrapperElement).toBeDefined();
      expect(wrapperElement.id).toBe(wrapperId);
    });

    it('THEN it should append the wrapper element to the body', () => {
      const bodyChildren = document.body.children;
      const lastChild = bodyChildren[bodyChildren.length - 1];
      expect(lastChild).toBe(wrapperElement);
    });

    it('THEN it should return the created wrapper element', () => {
      expect(wrapperElement).toBeInstanceOf(HTMLDivElement);
    });
  })
});
