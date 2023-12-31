'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import useWindowDimensions from '@/hooks/useWindowdimensions';
import { useEffect, useState } from 'react';
import { Code } from '../Code/Code';

export function Playground() {
  const { height, width } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>(
    'horizontal'
  );
  useEffect(() => {
    if (width <= 810) {
      setOrientation('vertical');
    } else {
      setOrientation('horizontal');
    }
  }, [width]);

  return (
    <ResizablePanelGroup
      direction={orientation}
      className='max-w-full rounded-lg border'
    >
      <ResizablePanel defaultSize={75}>
        <div className='flex h-full items-center justify-center p-6'>
          <Code />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>One</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
