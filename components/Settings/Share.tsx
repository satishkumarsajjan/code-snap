'use client';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { Button } from '../ui/button';

interface ShareProps {}

export const Share = ({}: ShareProps) => {
  const onCopy = async () => {
    const editorDiv = document.getElementById('screenshot');
    if (!editorDiv) {
      return;
    }
    try {
      const options = {
        width: editorDiv.clientWidth,
        height: editorDiv.clientHeight,
        style: {
          maxWidth: 'none',
          maxHeight: 'none',
        },
      };

      const dataUrl = await domtoimage.toPng(editorDiv, options);

      return fetch(dataUrl)
        .then((response) => response.blob())
        .then(async (blob) => {
          saveAs(blob, 'code-snippet.png');
        });
    } catch (e) {
      throw new Error('EMPTY_EDITOR');
    }
  };
  return (
    <div className='flex items-center justify-between gap-1 flex-wrap'>
      <Button variant={'secondary'} disabled>
        Copy link
      </Button>

      <Button variant={'secondary'} onClick={() => onCopy()}>
        Download image
      </Button>
    </div>
  );
};
