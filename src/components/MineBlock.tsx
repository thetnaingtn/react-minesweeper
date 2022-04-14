import IconMine from '~icons/mdi/mine';
import IconFlag from '~icons/mdi/flag';
import { BlockState } from '../types';

type MineBlockProps = {
  block: BlockState;
};

export default function MineBlock({ block }: MineBlockProps) {
  return (
    <button className="flex items-center justify-center min-w-8 min-h-8 border-0.5 border-gray-400 bg-gray-500 hover:bg-gray-400">
      {block.flaged && (
        <span className="text-red-400">
          <IconFlag />
        </span>
      )}
      {block.revealed && (block.mine ? <IconMine /> : block.adjacentMines)}
    </button>
  );
}
