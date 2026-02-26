'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useMobileNav() {
  const [openState, setOpenState] = useState<{ open: boolean; path: string }>({
    open: false,
    path: '',
  });
  const pathname = usePathname();
  const isOpen = openState.open && openState.path === pathname;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenState((prev) => ({ ...prev, open: false }));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return {
    isOpen,
    openMenu: () => setOpenState({ open: true, path: pathname }),
    closeMenu: () => setOpenState((prev) => ({ ...prev, open: false })),
    toggleMenu: () =>
      setOpenState((prev) =>
        prev.open && prev.path === pathname ? { ...prev, open: false } : { open: true, path: pathname }
      ),
  };
}
