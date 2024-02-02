import * as NextNavigation from 'next/navigation';

export function spyUsePathname(pathname: string) {
  const usePathnameSpy = jest.spyOn(NextNavigation, 'usePathname')

  return usePathnameSpy.mockReturnValue(pathname);
}
