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
import { useStore } from '@/hooks/store';

export function Playground() {
  const { height, width } = useWindowDimensions();
  const { title } = useStore();
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
      className='max-w-full border rounded-lg h-full'
    >
      <ResizablePanel defaultSize={75}>
        <div className='flex items-center justify-center h-full rounded-lg'>
          <Surround>
            <div className='shadow-md'>
              <div className='flex items-center justify-center w-full bg-[#100E09] p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-t-lg'>
                <p className='text-sm text-gray-200'>{`${title}`}</p>
              </div>
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
