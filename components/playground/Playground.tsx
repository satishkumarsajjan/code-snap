'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import useWindowDimensions from '@/hooks/useWindowdimensions';
import { useEffect, useState } from 'react';
import { Code } from '../Code/Code';
import { Settings } from '../Settings/Settings';
import { Surround } from '../Surround/Surround';

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
      className='max-w-full border rounded-lg'
    >
      <ResizablePanel defaultSize={75}>
        <div className='flex items-center justify-center h-full rounded-lg'>
          <Surround>
            <div className='shadow-md'>
              <Code />
            </div>
          </Surround>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className='flex items-center justify-center h-full p-6'>
          <Settings />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
