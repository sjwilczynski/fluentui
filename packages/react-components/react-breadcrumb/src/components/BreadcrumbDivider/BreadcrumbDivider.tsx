import * as React from 'react';
import { useBreadcrumbDivider_unstable } from './useBreadcrumbDivider';
import { renderBreadcrumbDivider_unstable } from './renderBreadcrumbDivider';
import { useBreadcrumbDividerStyles_unstable } from './useBreadcrumbDividerStyles';
import type { BreadcrumbDividerProps } from './BreadcrumbDivider.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * BreadcrumbDivider component - TODO: add more docs
 */
export const BreadcrumbDivider: ForwardRefComponent<BreadcrumbDividerProps> = React.forwardRef((props, ref) => {
  const state = useBreadcrumbDivider_unstable(props, ref);

  useBreadcrumbDividerStyles_unstable(state);

  const { useTextStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderBreadcrumbDivider_unstable(state);
});

BreadcrumbDivider.displayName = 'BreadcrumbDivider';