'use client';

import {
  Calculator,
  Calendar,
  CreditCard,
  LucideProps,
  Paperclip,
  PhoneCall,
  Settings,
  Smile,
  User,
} from 'lucide-react';
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';

export type PageProps = {};

type CommandGroup = {
  heading: string;
  commands: {
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
    >;
    text: string;
    shortcut?: string;
  }[];
};

const commandGroups: CommandGroup[] = [
  {
    heading: 'Suggestions',
    commands: [
      { icon: Calendar, text: 'Calendar' },
      { icon: Smile, text: 'Search Emoji' },
      { icon: Calculator, text: 'Calculator' },
    ],
  },
  {
    heading: 'Settings',
    commands: [
      { icon: User, text: 'Profile', shortcut: '⌘P' },
      { icon: CreditCard, text: 'Billing', shortcut: '⌘B' },
      { icon: Settings, text: 'Settings', shortcut: '⌘S' },
    ],
  },
  {
    heading: 'Help',
    commands: [
      { icon: PhoneCall, text: 'Contact Support', shortcut: '⌘H' },
      { icon: Paperclip, text: 'Documentation', shortcut: '⌘D' },
    ],
  },
];

const Page: React.FC<PageProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Keyboard shortcut
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-[240px]">
      <p className="text-sm text-muted-foreground">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {commandGroups.map((group, index) => (
            <div key={group.heading}>
              <CommandGroup heading={group.heading}>
                {group.commands.map(command => (
                  <CommandItem key={command.text}>
                    <command.icon className="mr-2 h-4 w-4" />

                    <span>{command.text}</span>

                    {command?.shortcut && (
                      <CommandShortcut>{command.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>

              {index < commandGroups.length - 1 && <CommandSeparator />}
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Page;
