import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import type { ReactNode } from 'react';

interface ToolTipProps {
  text: string;
  children: ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ text, children }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolTip;
