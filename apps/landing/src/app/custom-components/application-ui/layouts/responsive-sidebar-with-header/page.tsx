import React, { FunctionComponent } from 'react';
import ResponsiveSidebarWithHeader from './_components/responsive-sidebar-with-header';

export type ResponsiveSidebarWithHeaderPageProps = {
  // no props
};

const ResponsiveSidebarWithHeaderPage: FunctionComponent<
  ResponsiveSidebarWithHeaderPageProps
> = () => {
  return <ResponsiveSidebarWithHeader />;
};

export default ResponsiveSidebarWithHeaderPage;
