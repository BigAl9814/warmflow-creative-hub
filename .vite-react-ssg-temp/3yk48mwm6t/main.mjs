import { ViteReactSSG } from "vite-react-ssg";
import * as React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
import * as helmetPkg from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, CalendarCheck, UserCircle, Phone, Menu, UserCircle2, Mail, MapPin, Clock, ChevronDown, Wrench, ArrowRight, Star, Quote, Home, Building2, Flame, Droplets, ShieldCheck } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
const Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/sonner.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    void 0
  );
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  void 0
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0);
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  void 0
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/dev-server/src/components/ui/toast.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  void 0
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 85,
  columnNumber: 3
}, void 0));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 93,
  columnNumber: 3
}, void 0));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 13,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 14,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/dev-server/src/components/ui/toaster.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/dev-server/src/components/ui/toaster.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ui/toaster.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-[transform,box-shadow,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-foreground/15 bg-card text-foreground hover:bg-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent text-accent-foreground shadow-stamp hover:-translate-y-[2px] hover:shadow-[0_8px_0_hsl(215_75%_18%)] font-display tracking-wide uppercase",
        deep: "bg-gradient-deep text-primary-foreground shadow-pop hover:-translate-y-[2px] font-display tracking-wide uppercase",
        emergency: "bg-accent text-accent-foreground border-2 border-accent-foreground/10 shadow-stamp font-display uppercase tracking-wider hover:-translate-y-[2px]"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-full px-4",
        lg: "h-14 rounded-full px-8 text-base",
        xl: "h-16 rounded-full px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, false, {
      fileName: "/dev-server/src/components/ui/button.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, void 0);
  }
);
Button.displayName = "Button";
const logo$1 = "/assets/ottr-wordmark-D7AgdVLh.webp";
const JOBBER_BOOK_URL = "https://clienthub.getjobber.com/booking/aadeb93f-d697-4a0d-a5f6-7f2c3ca6b9b4/";
const JOBBER_CLIENT_HUB_URL = "https://clienthub.getjobber.com/client_hubs/e4833ce1-922c-4bca-b73d-06aca55b449b/login/new?source=share_login";
const PHONE_DISPLAY = "289-488-1007";
const PHONE_TEL = "+12894881007";
const EMAIL = "info@plumr.ca";
const ADDRESS = {
  street: "187 King St",
  city: "Welland",
  region: "ON",
  postalCode: "L3B 3J4",
  country: "CA"
};
const ADDRESS_LINE = "187 King St, Welland, ON L3B 3J4";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=187+King+St+Welland+ON+L3B+3J4";
const REVIEWS = [
  {
    quote: "Great service by Alex. Outstanding job on the replacement of the kitchen faucet. Thank you for the care and the expertise for doing a great job. Alex was amazing and friendly.",
    name: "rtpom M"
  },
  {
    quote: "Prompt service and friendly manner. Worked quickly to diagnose the problem (fridge water line) which he replaced with a steel beaded line that will last and not dry out. Great response.",
    name: "Donald W Hawken"
  },
  {
    quote: "He is an honest and a professional plumber. He promptly arrived to take care of our clogged sink drainage and quickly diagnosed and fixed the issue. Highly recommended.",
    name: "Jansin Ozkur"
  }
];
const FAQS = [
  {
    q: "What plumbing services do you offer?",
    a: "We offer a wide range of services including drain cleaning, leak repairs, water heater installations, pipe replacements, toilet repairs, heating, sump pumps, and more. Whether it's an emergency fix or routine maintenance, we have you covered."
  },
  {
    q: "Are you available for emergency plumbing services?",
    a: "Yes, we provide 24/7 emergency plumbing services. If you have a plumbing issue that can't wait, call us immediately at 289-488-1007 and we'll dispatch a technician to your location as soon as possible."
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the type of service and complexity of the issue. We believe in transparent pricing and will always provide an upfront estimate before starting any work — no hidden fees or surprises."
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes, we stand behind our work with a satisfaction guarantee. Most of our services come with a warranty that covers labor and parts. If something isn't right, we'll make it right."
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve the entire Niagara Region, including Welland, St. Catharines, Niagara Falls, Fort Erie, Port Colborne, Thorold, Lincoln, Grimsby, Pelham, Niagara-on-the-Lake, West Lincoln, and Wainfleet."
  },
  {
    q: "How can I schedule an appointment?",
    a: "You can schedule an appointment by calling us at 289-488-1007, booking online through our Jobber booking link, or filling out our contact form. We'll work with your schedule to find the most convenient time."
  }
];
const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
const Header = () => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b-2 border-foreground/10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container flex h-20 items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center shrink-0", "aria-label": "Ottr Plumr Plumbing & Heating home", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: logo$1,
          alt: "Ottr Plumr Plumbing & Heating logo",
          width: 200,
          height: 80,
          decoding: "async",
          fetchPriority: "high",
          className: "h-14 md:h-16 w-auto object-contain"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex items-center gap-1", "aria-label": "Primary", children: links.map((l) => /* @__PURE__ */ jsxDEV(
        NavLink,
        {
          to: l.to,
          end: l.to === "/",
          className: ({ isActive }) => cn(
            "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
            isActive ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary"
          ),
          children: l.label
        },
        l.to,
        false,
        {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 38,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", size: "default", className: "hidden lg:inline-flex", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(CalendarCheck, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, void 0),
          " Book Now"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", size: "default", className: "hidden lg:inline-flex", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_CLIENT_HUB_URL, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(UserCircle, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, void 0),
          " Client Hub"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "default", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, "aria-label": `Call Ottr Plumr at ${PHONE_DISPLAY}`, children: [
          /* @__PURE__ */ jsxDEV(Phone, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, void 0),
          " ",
          PHONE_DISPLAY
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "md:hidden",
            "aria-label": "Toggle menu",
            onClick: () => setOpen((s) => !s),
            children: open ? /* @__PURE__ */ jsxDEV(X, {}, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, void 0) : /* @__PURE__ */ jsxDEV(Menu, {}, void 0, false, {
              fileName: "/dev-server/src/components/layout/Header.tsx",
              lineNumber: 77,
              columnNumber: 29
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 70,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/layout/Header.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, void 0),
    open && /* @__PURE__ */ jsxDEV("div", { className: "md:hidden border-t-2 border-foreground/10 bg-card", children: /* @__PURE__ */ jsxDEV("nav", { className: "container py-4 flex flex-col gap-1", "aria-label": "Mobile", children: [
      links.map((l) => /* @__PURE__ */ jsxDEV(
        NavLink,
        {
          to: l.to,
          end: l.to === "/",
          onClick: () => setOpen(false),
          className: ({ isActive }) => cn(
            "px-4 py-3 rounded-xl text-base font-semibold",
            isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
          ),
          children: l.label
        },
        l.to,
        false,
        {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 86,
          columnNumber: 15
        },
        void 0
      )),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 mt-3", children: [
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(CalendarCheck, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, void 0),
          " Book"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_CLIENT_HUB_URL, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(UserCircle, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, void 0),
          " Client Hub"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", className: "col-span-2", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
          /* @__PURE__ */ jsxDEV(Phone, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Header.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, void 0),
          " Call ",
          PHONE_DISPLAY
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Header.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/layout/Header.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/layout/Header.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/layout/Header.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/layout/Header.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, void 0);
};
const logo = "/assets/ottr-plumr-logo-DXD-gQde.webp";
const Footer = () => {
  return /* @__PURE__ */ jsxDEV("footer", { className: "mt-24", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "water-band h-10", "aria-hidden": "true" }, void 0, false, {
      fileName: "/dev-server/src/components/layout/Footer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-deep text-primary-foreground", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container py-14 grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("img", { src: logo, alt: "Ottr Plumr Plumbing & Heating logo — Welland, Ontario", width: 56, height: 56, loading: "lazy", decoding: "async", className: "h-14 w-14 rounded-xl bg-card p-1" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 14,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-display text-xl", children: "Ottr Plumr" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 16,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs opacity-80", children: "Plumbing & Heating" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 17,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 15,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl mt-4 text-primary-glow", children: "Otterly Reliable." }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm opacity-80", children: "Professional, start to finish." }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs opacity-60 mt-4", children: "A division of Canalside Mechanical LTD" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-base mb-3", children: "Explore" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm opacity-90", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "Home" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 30,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:underline", children: "Services" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 31,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 31,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/service-areas", className: "hover:underline", children: "Service Areas" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 32,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "hover:underline", children: "Blog" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 33,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: "hover:underline", children: "About" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 34,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "hover:underline", children: "Contact" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 35,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:underline inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(CalendarCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 38,
                columnNumber: 19
              }, void 0),
              " Book Now"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 37,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 36,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_CLIENT_HUB_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:underline inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(UserCircle2, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 43,
                columnNumber: 19
              }, void 0),
              " Client Hub"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 42,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-base mb-3", children: "Get in Touch" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "h-4 w-4 mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 53,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, className: "hover:underline", children: PHONE_DISPLAY }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 54,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 52,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(Mail, { className: "h-4 w-4 mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: `mailto:${EMAIL}`, className: "hover:underline", children: EMAIL }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: GOOGLE_MAPS_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:underline", children: ADDRESS_LINE }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 62,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 opacity-80", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "h-4 w-4 shrink-0", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: "Serving every city in the Niagara Region" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-base mb-3", children: "Hours" }, void 0, false, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm opacity-90", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-4 w-4 mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 77,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: "24 / 7 Emergency Service" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Footer.tsx",
                  lineNumber: 79,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "opacity-80", children: "Always on call when you need us" }, void 0, false, {
                  fileName: "/dev-server/src/components/layout/Footer.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/layout/Footer.tsx",
                lineNumber: 78,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "pl-6", children: "Regular hours: Mon–Fri, 8 AM – 4 PM" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { className: "pl-6 opacity-80", children: "After-hours rates apply on evenings & weekends" }, void 0, false, {
              fileName: "/dev-server/src/components/layout/Footer.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/layout/Footer.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "border-t border-primary-foreground/15", children: /* @__PURE__ */ jsxDEV("div", { className: "container py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-80", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Canalside Mechanical LTD (Ottr Plumr). All rights reserved."
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: "187 King St, Welland, ON L3B 3J4" }, void 0, false, {
          fileName: "/dev-server/src/components/layout/Footer.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/layout/Footer.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Footer.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/layout/Footer.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/layout/Footer.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, void 0);
};
const EmergencyCTA = () => {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 md:px-0 md:pb-6 md:pt-0 md:bottom-6 md:inset-x-auto md:right-6 bg-gradient-to-t from-background via-background/95 to-transparent md:bg-none pointer-events-none",
      "aria-hidden": false,
      children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: `tel:${PHONE_TEL}`,
          "aria-label": `Call Ottr Plumr 24/7 emergency line at ${PHONE_DISPLAY}`,
          className: "pointer-events-auto flex items-center justify-center gap-2 w-full md:w-auto rounded-full bg-accent text-accent-foreground font-display text-base md:text-sm px-5 py-3.5 md:px-6 md:py-3 shadow-pop border-2 border-accent-foreground/10 active:scale-[0.98] hover:scale-[1.02] transition-transform",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "relative flex h-2.5 w-2.5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75 animate-ping" }, void 0, false, {
                fileName: "/dev-server/src/components/EmergencyCTA.tsx",
                lineNumber: 20,
                columnNumber: 11
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-foreground" }, void 0, false, {
                fileName: "/dev-server/src/components/EmergencyCTA.tsx",
                lineNumber: 21,
                columnNumber: 11
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/EmergencyCTA.tsx",
              lineNumber: 19,
              columnNumber: 9
            }, void 0),
            /* @__PURE__ */ jsxDEV(Phone, { className: "h-5 w-5" }, void 0, false, {
              fileName: "/dev-server/src/components/EmergencyCTA.tsx",
              lineNumber: 23,
              columnNumber: 9
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: [
              "24/7 Emergency · Call ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/EmergencyCTA.tsx",
              lineNumber: 24,
              columnNumber: 9
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/EmergencyCTA.tsx",
          lineNumber: 14,
          columnNumber: 7
        },
        void 0
      )
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/EmergencyCTA.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    void 0
  );
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
  return null;
};
const HelmetMod$1 = helmetPkg.default ?? helmetPkg;
const HelmetProvider = HelmetMod$1.HelmetProvider ?? helmetPkg.HelmetProvider;
const queryClient = new QueryClient();
const Layout = () => {
  return /* @__PURE__ */ jsxDEV(HelmetProvider, { children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { children: [
    /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/dev-server/src/components/layout/Layout.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV(Toaster$1, {}, void 0, false, {
      fileName: "/dev-server/src/components/layout/Layout.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
      fileName: "/dev-server/src/components/layout/Layout.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col bg-background", children: [
      /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { className: "flex-1 pb-20", children: /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(EmergencyCTA, {}, void 0, false, {
        fileName: "/dev-server/src/components/layout/Layout.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/layout/Layout.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/layout/Layout.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/layout/Layout.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/layout/Layout.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, void 0);
};
const heroOtter = "/assets/ottr-mascot-BShu6g3u.webp";
const heroPond = "/assets/hero-pond-BRhU5Hi9.webp";
const vanWrap = "/assets/ottr-plumr-van-DbOPZHjf.webp";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/accordion.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/accordion.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/accordion.tsx",
    lineNumber: 22,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/dev-server/src/components/ui/accordion.tsx",
  lineNumber: 21,
  columnNumber: 3
}, void 0));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxDEV("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
      fileName: "/dev-server/src/components/ui/accordion.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/accordion.tsx",
    lineNumber: 41,
    columnNumber: 3
  },
  void 0
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const FAQ = ({ injectSchema = true, schemaId = "faq-component-jsonld" }) => {
  useEffect(() => {
    var _a;
    if (!injectSchema) return;
    if (typeof document === "undefined") return;
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    };
    (_a = document.getElementById(schemaId)) == null ? void 0 : _a.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      var _a2;
      (_a2 = document.getElementById(schemaId)) == null ? void 0 : _a2.remove();
    };
  }, [injectSchema, schemaId]);
  return /* @__PURE__ */ jsxDEV("section", { className: "container py-20 md:py-24", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Got questions?" }, void 0, false, {
        fileName: "/dev-server/src/components/FAQ.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Here's the answers" }, void 0, false, {
        fileName: "/dev-server/src/components/FAQ.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "The most common things Niagara homeowners and businesses ask us." }, void 0, false, {
        fileName: "/dev-server/src/components/FAQ.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/FAQ.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "max-w-3xl mx-auto stamp-card px-6 md:px-8", children: FAQS.map((item, i) => /* @__PURE__ */ jsxDEV(AccordionItem, { value: `item-${i}`, className: "border-foreground/10 last:border-0", children: [
      /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left font-display text-lg text-primary hover:no-underline", children: item.q }, void 0, false, {
        fileName: "/dev-server/src/components/FAQ.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-foreground/80 text-base leading-relaxed", children: item.a }, void 0, false, {
        fileName: "/dev-server/src/components/FAQ.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, void 0)
    ] }, item.q, true, {
      fileName: "/dev-server/src/components/FAQ.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/FAQ.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/FAQ.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, void 0);
};
const JOBS = [
  {
    title: "Old leaking tank → high-efficiency tankless",
    city: "St. Catharines",
    service: "Water Heater Replacement",
    before: "from-muted to-reed/40",
    after: "from-water to-water-deep"
  },
  {
    title: "Backed-up basement drain cleared & camera-inspected",
    city: "Welland",
    service: "Drain Cleaning",
    before: "from-reed/60 to-foreground/40",
    after: "from-primary/30 to-primary-glow/40"
  },
  {
    title: "Failed sump pump → dual pump + battery backup",
    city: "Niagara Falls",
    service: "Sump Pump Install",
    before: "from-muted to-foreground/30",
    after: "from-primary-glow/40 to-water"
  }
];
const BeforeAfterGallery = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "container py-20 md:py-24", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Before & after" }, void 0, false, {
        fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Real jobs across Niagara" }, void 0, false, {
        fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "A look at recent work — clean installs, no shortcuts." }, void 0, false, {
        fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6", children: JOBS.map((j) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: `relative aspect-square bg-gradient-to-br ${j.before} grid place-items-center`, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-foreground/80 text-card px-2 py-0.5 rounded-full", children: "Before" }, void 0, false, {
            fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(Wrench, { className: "h-10 w-10 text-foreground/30", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: `relative aspect-square bg-gradient-to-br ${j.after} grid place-items-center`, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded-full", children: "After" }, void 0, false, {
            fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(Wrench, { className: "h-10 w-10 text-primary-foreground/70", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-accent font-semibold uppercase tracking-wider", children: [
          j.service,
          " · ",
          j.city
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-lg text-primary mt-1 leading-tight", children: j.title }, void 0, false, {
          fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, void 0)
    ] }, j.title, true, {
      fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs text-foreground/50 mt-6", children: "Project photos coming soon — illustrations shown for layout." }, void 0, false, {
      fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/BeforeAfterGallery.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, void 0);
};
const CITIES = [
  {
    slug: "st-catharines",
    name: "St. Catharines",
    blurb: "The Garden City's go-to plumbing and heating crew — from Port Dalhousie waterfront homes to downtown businesses, we keep things flowing.",
    longDesc: "St. Catharines is one of our busiest service areas — a mix of century homes near downtown and Old Glenridge, post-war stock through Western Hill and Merritton, lakeside properties in Port Dalhousie, and modern subdivisions out toward the QEW. That variety means we see everything from galvanized supply lines and clay sewer laterals in older streets to PEX manifolds and tankless conversions in newer builds. Whatever's behind your wall, we've worked on it.",
    commonIssues: [
      "Tree-root intrusion in clay sewer laterals (older neighbourhoods)",
      "Hard-water scale on water heaters and tankless coils",
      "Spring sump-pump failures near the waterfront and 12 Mile Creek",
      "Aging cast-iron drain stacks in century homes",
      "Frozen exterior hose bibs after fast cold snaps off the lake"
    ],
    localNotes: "Lake-effect weather and an older housing core make annual furnace tune-ups and sump-pump testing especially worthwhile here.",
    neighbourhoods: ["Port Dalhousie", "Downtown", "Glenridge", "Western Hill", "Merritton", "Grantham", "Facer"]
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    blurb: "Fast, dependable service across Niagara Falls — from Stamford and Chippawa to the tourist district. Residential and commercial, 24/7.",
    longDesc: "Niagara Falls is split between dense residential areas (Stamford, Drummondville, Mount Carmel), the lower-density river-side neighbourhood of Chippawa, and a heavy commercial corridor through the tourist district. We work all of it — from a leaking baseboard heater in a 1960s Stamford bungalow to backflow certification on a Clifton Hill restaurant to emergency drain service for hotels and motels along Lundy's Lane.",
    commonIssues: [
      "Commercial backflow & grease-trap maintenance for restaurants and hotels",
      "Aging cast-iron stacks in older Stamford and Drummondville homes",
      "Sump pump and basement waterproofing near the river in Chippawa",
      "Hard-water-related water heater failures",
      "After-hours emergency service for tourist-district businesses"
    ],
    localNotes: "We schedule commercial work around peak tourist season and run after-hours rotations for hospitality clients along Lundy's Lane and Clifton Hill.",
    neighbourhoods: ["Stamford", "Chippawa", "Mount Carmel", "Drummondville", "Lundy's Lane", "Clifton Hill"]
  },
  {
    slug: "welland",
    name: "Welland",
    blurb: "Proudly headquartered nearby — Welland is home turf. Same-day service for plumbing, heating, water heaters, and emergencies.",
    longDesc: "Welland is home base. Our shop is at 187 King St, which means most Welland calls get the fastest dispatch in the network — same-day for almost everything, often within a couple of hours. We work every neighbourhood: the older brick homes through Crowland and the canal area, the post-war stock in North Welland, and the newer family subdivisions out in Cooks Mills and Dain City.",
    commonIssues: [
      "Sump pump and weeping-tile issues in low-lying areas near the canal",
      "Aging supply lines (galvanized & lead) in older Crowland & downtown homes",
      "Sewer-lateral root intrusion in mature streets",
      "Frozen pipes in uninsulated additions and crawlspaces",
      "End-of-life water heaters in 1990s–2000s housing stock"
    ],
    localNotes: "Canal-area properties and low-lying lots make battery-backup sump pumps a near-must — we've seen way too many basement floods after summer downpours.",
    neighbourhoods: ["Dain City", "North Welland", "Crowland", "Cooks Mills", "Downtown Welland"]
  },
  {
    slug: "thorold",
    name: "Thorold",
    blurb: "From Allanburg to Port Robinson — full-service plumbing and heating for Thorold homes and businesses, including the locks community.",
    longDesc: "Thorold runs the gamut from older homes near downtown and the locks to newer family subdivisions on the south side and rural properties out toward Port Robinson and Allanburg. Brock University rentals add a layer of property-management work, and we handle that too — fast turnover plumbing repairs, water heater swaps between leases, and quick-response calls for landlords.",
    commonIssues: [
      "Drain backups in student rental properties",
      "Older cast-iron stacks needing partial or full replacement",
      "Sump pump failures in low-lying south-side properties",
      "Furnace tune-ups before each heating season",
      "Tankless water heater installs in newer subdivisions"
    ],
    localNotes: "We work closely with Thorold landlords and property managers — fast response between tenants is what keeps your rental schedule on track.",
    neighbourhoods: ["Allanburg", "Port Robinson", "Confederation Heights", "Downtown Thorold", "Rolling Meadows"]
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    blurb: "Beamsville, Vineland, Jordan — wine country deserves wine-country water pressure. Local plumbing and heating you can trust.",
    longDesc: "Lincoln stretches from the lakeshore through Beamsville, Vineland, and Jordan up to the escarpment, and we cover it all — including a fair bit of agricultural and winery work alongside residential. Older farmhouses, vineyard properties, modern subdivisions in Beamsville, and rural homes on wells: we've worked on every variation Lincoln has to offer.",
    commonIssues: [
      "Well-pump troubleshooting and pressure-tank replacement on rural lots",
      "Hard-water and iron staining requiring proper filtration",
      "Hot water demand for vineyard and agritourism operations",
      "Frozen exterior lines on older farmhouse plumbing",
      "Boiler service for heritage homes with cast-iron radiators"
    ],
    localNotes: "Wells, hard water, and older farmhouse plumbing are the Lincoln trifecta — water filtration and proper pressure systems make a huge quality-of-life difference.",
    neighbourhoods: ["Beamsville", "Vineland", "Jordan", "Campden", "Tintern"]
  },
  {
    slug: "grimsby",
    name: "Grimsby",
    blurb: "From the lakeshore to the escarpment, Grimsby families count on us for reliable plumbing, heating, and emergency service.",
    longDesc: "Grimsby has grown fast — newer subdivisions toward Casablanca and Winona Park, established neighbourhoods through the centre of town, and beach-area properties along the lake. We service the whole footprint, from emergency calls on a Saturday evening to planned water-heater replacements in newer builds and full bathroom renos in heritage homes.",
    commonIssues: [
      "Tankless and high-efficiency water heater installs in newer builds",
      "Sump pump and storm drainage near the lakeshore",
      "Furnace and boiler service for the older centre-of-town stock",
      "Smart thermostat upgrades and zoning",
      "Backflow installation for new commercial construction"
    ],
    localNotes: "Newer Grimsby neighbourhoods are great candidates for tankless conversions and smart-zoning upgrades — the existing infrastructure usually supports it without major retrofits.",
    neighbourhoods: ["Grimsby Beach", "Winona Park", "Casablanca", "Downtown Grimsby"]
  },
  {
    slug: "pelham",
    name: "Pelham",
    blurb: "Fonthill, Fenwick, Ridgeville — quiet streets, big trees, and trusted local plumbing & heating service when you need it.",
    longDesc: "Pelham covers Fonthill, Fenwick, Ridgeville, and the rural pockets around them — a mix of established family homes, newer custom builds on larger lots, and rural properties on wells and septic. Big trees mean root issues in older sewer laterals; larger lots mean we plan for travel and bring the right tools the first time.",
    commonIssues: [
      "Tree-root intrusion in clay sewer lines (mature Fonthill streets)",
      "Well & septic system service on rural lots",
      "Whole-home water filtration for hard or iron-rich water",
      "High-end fixture installs in custom builds",
      "Boiler & radiant in-floor heating service"
    ],
    localNotes: "Rural wells, septic systems, and mature trees with aggressive roots are the three things we plan for in Pelham — and we usually bring the camera scope on the first visit.",
    neighbourhoods: ["Fonthill", "Fenwick", "Ridgeville", "North Pelham"]
  },
  {
    slug: "fort-erie",
    name: "Fort Erie",
    blurb: "From Crystal Beach cottages to Ridgeway and Stevensville — full-service plumbing and heating across Fort Erie, year-round.",
    longDesc: "Fort Erie has its own personality — Crystal Beach cottages and seasonal homes, the established neighbourhoods of Ridgeway and Bridgeburg, rural properties out toward Stevensville, and a busy border-town commercial strip. We handle the seasonal work (winterizations, spring re-openings, frozen-line repairs) along with the year-round residential and commercial calls.",
    commonIssues: [
      "Cottage winterizations and spring re-openings (Crystal Beach)",
      "Frozen and burst pipes in seasonally-occupied homes",
      "Sump pump installs for lakeside and low-lying properties",
      "Older cast-iron drain replacement in Bridgeburg",
      "Well-pump service on rural Stevensville properties"
    ],
    localNotes: "If you own a Crystal Beach cottage, get the winterization scheduled before mid-October — we book up fast as soon as the temperature drops.",
    neighbourhoods: ["Crystal Beach", "Ridgeway", "Stevensville", "Bridgeburg", "Black Creek"]
  },
  {
    slug: "port-colborne",
    name: "Port Colborne",
    blurb: "Lakefront living means lakefront plumbing problems. We handle them all — sump pumps, water heaters, repairs, and full installs.",
    longDesc: "Port Colborne wraps around Lake Erie and the southern end of the Welland Canal, and lakefront properties bring their own set of plumbing realities — high water tables, storm-driven sump duty, and seasonal cottages that need careful winterization. We service the whole city, from Sherkston cottages to the established homes along the canal to the newer builds in Humberstone.",
    commonIssues: [
      "Sump pumps & battery backups for lakefront properties",
      "Cottage winterizations in Sherkston and Cedar Bay",
      "Hard-water water heater scaling",
      "Older home sewer-lateral inspections",
      "Frozen line repairs after fast lake-effect cold snaps"
    ],
    localNotes: "If you're on the lakeshore, a properly-spec'd sump pump with battery backup is the single best thing you can do for your basement.",
    neighbourhoods: ["Sherkston", "Humberstone", "Cedar Bay", "Downtown Port Colborne"]
  },
  {
    slug: "niagara-on-the-lake",
    name: "Niagara-on-the-Lake",
    blurb: "Heritage homes, modern wineries, B&Bs and family residences — discreet, professional plumbing and heating in NOTL.",
    longDesc: "Niagara-on-the-Lake is a careful mix of heritage homes in Old Town, established residential through Virgil and St. Davids, modern subdivisions near Glendale, and a steady year-round flow of winery, restaurant, and B&B work. Heritage properties demand a careful hand — original plaster, refinished hardwood, and historical fixtures don't tolerate sloppy work.",
    commonIssues: [
      "Heritage-home plumbing upgrades (sympathetic to original finishes)",
      "B&B and short-term rental hot water capacity",
      "Boiler service for cast-iron radiator systems",
      "Backflow & commercial fixture work for wineries and restaurants",
      "Frozen lines in older Old Town homes"
    ],
    localNotes: "We treat NOTL heritage homes like museums — drop cloths, careful protection, and minimal disruption. Original finishes deserve it.",
    neighbourhoods: ["Old Town", "Virgil", "St. Davids", "Queenston", "Glendale"]
  },
  {
    slug: "west-lincoln",
    name: "West Lincoln",
    blurb: "Smithville, Caistor Centre, Wellandport — rural service done right. Well systems, heating, water heaters and emergency repair.",
    longDesc: "West Lincoln is rural Niagara — Smithville, Caistor Centre, Wellandport, and the smaller hamlets between. Most properties run on wells and septic, and that asks for a different skillset than city plumbing. We handle well-pump replacements, pressure-tank work, water filtration for iron and tannins, and full residential plumbing & heating service for the whole township.",
    commonIssues: [
      "Well pumps, jet pumps, and pressure tank replacement",
      "Iron, sulphur, and hardness filtration",
      "Septic system pump service for indoor sewage ejector pits",
      "Furnace, boiler, and propane heating service",
      "Long-distance water-line repair on larger rural lots"
    ],
    localNotes: "Rural West Lincoln is well-and-septic country — proper filtration and a reliable well pump make all the difference. We're set up for it.",
    neighbourhoods: ["Smithville", "Caistor Centre", "Wellandport", "Silverdale"]
  },
  {
    slug: "wainfleet",
    name: "Wainfleet",
    blurb: "Long Beach to Chambers Corners — country plumbing and heating service with city-grade quality and warranties.",
    longDesc: "Wainfleet is a quiet, mostly-rural township — Long Beach cottages along Lake Erie, Wainfleet Village in the centre, and rural properties scattered across the township. We bring city-grade quality, warranties, and licensed work to country properties, including well systems, septic ejectors, and lakeside sump pump installs.",
    commonIssues: [
      "Lake Erie cottage winterizations & spring re-openings",
      "Well pump and pressure tank service",
      "Sump pumps for low-lying lots and lakeshore properties",
      "Older home heating system service",
      "Long water-line runs from well to house"
    ],
    localNotes: "Long Beach cottage owners — book winterization in early fall. We get there, but earlier appointments mean better timing before the first hard freeze.",
    neighbourhoods: ["Long Beach", "Wainfleet Village", "Chambers Corners"]
  }
];
const HelmetMod = helmetPkg.default ?? helmetPkg;
const Helmet = HelmetMod.Helmet ?? helmetPkg.Helmet;
const SITE_URL = "https://plumr.ca";
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== "content") el.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  el.setAttribute("content", attrs.content);
};
const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};
function useSeo({
  title,
  description,
  canonicalPath,
  ogImage,
  jsonLd,
  jsonLdId = "page-jsonld",
  noIndex
}) {
  useEffect(() => {
    var _a;
    if (!isBrowser) return;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    if (ogImage) {
      const absolute = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: absolute });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: absolute });
    }
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow"
    });
    const path = canonicalPath ?? window.location.pathname;
    const canonicalUrl = `${SITE_URL}${path}`;
    upsertLink("canonical", canonicalUrl);
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    (_a = document.getElementById(jsonLdId)) == null ? void 0 : _a.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = jsonLdId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      var _a2;
      (_a2 = document.getElementById(jsonLdId)) == null ? void 0 : _a2.remove();
    };
  }, [title, description, canonicalPath, ogImage, jsonLd, jsonLdId, noIndex]);
}
function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
  jsonLd,
  noIndex
}) {
  const path = canonicalPath ?? "/";
  const canonicalUrl = `${SITE_URL}${path}`;
  const absoluteImage = ogImage ? ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}` : void 0;
  return React.createElement(
    Helmet,
    null,
    React.createElement("title", null, title),
    React.createElement("meta", { name: "description", content: description }),
    React.createElement("meta", {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow"
    }),
    React.createElement("link", { rel: "canonical", href: canonicalUrl }),
    React.createElement("meta", { property: "og:title", content: title }),
    React.createElement("meta", { property: "og:description", content: description }),
    React.createElement("meta", { property: "og:type", content: "website" }),
    React.createElement("meta", { property: "og:url", content: canonicalUrl }),
    React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    React.createElement("meta", { name: "twitter:title", content: title }),
    React.createElement("meta", { name: "twitter:description", content: description }),
    absoluteImage ? React.createElement("meta", { property: "og:image", content: absoluteImage }) : null,
    absoluteImage ? React.createElement("meta", { name: "twitter:image", content: absoluteImage }) : null,
    jsonLd ? React.createElement("script", {
      type: "application/ld+json",
      // Inline as text for SSR; Helmet renders this safely.
      children: JSON.stringify(jsonLd)
    }) : null
  );
}
const services = [
  { icon: Home, title: "Residential Plumbing", desc: "From dripping taps to full re-pipes — done right the first time." },
  { icon: Building2, title: "Commercial Plumbing", desc: "Reliable service for shops, offices, and industrial sites across Niagara." },
  { icon: Flame, title: "Heating Systems", desc: "Install, service, and repair for furnaces, boilers, and radiant heat." },
  { icon: Droplets, title: "Water Heaters", desc: "Tank, tankless, and on-demand systems — sized and installed properly." },
  { icon: ShieldCheck, title: "Sump Pumps", desc: "Keep your basement bone-dry with pro-grade sump pump installs." },
  { icon: Wrench, title: "Repairs & Diagnostics", desc: "Honest assessments, fair pricing, no upsell games." }
];
const HomePage = () => {
  const seo = {
    title: "Niagara Plumber & Heating | 24/7 Service | Ottr Plumr",
    description: "Licensed Niagara plumbers & HVAC techs — 24/7 emergency plumbing, drain cleaning, water heater repair, sump pumps, furnaces & boilers. Same-day service in St. Catharines, Niagara Falls & Welland. Call 289-488-1007.",
    canonicalPath: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        name: "Ottr Plumr Plumbing & Heating",
        image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fa124001-f755-44fc-be6d-90ee00580d8b",
        url: "https://plumr.ca/",
        telephone: PHONE_TEL,
        email: EMAIL,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 42.9925,
          longitude: -79.2483
        },
        hasMap: "https://www.google.com/maps/search/?api=1&query=187+King+St+Welland+ON+L3B+3J4",
        areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "50" },
        review: REVIEWS.map((r) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: r.name },
          reviewBody: r.quote
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }
    ]
  };
  useSeo(seo);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Seo, { ...seo }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: heroPond,
          alt: "",
          "aria-hidden": "true",
          fetchPriority: "high",
          decoding: "async",
          width: 1920,
          height: 1080,
          className: "absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 85,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container relative pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-card/80 backdrop-blur border-2 border-foreground/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, void 0),
            " 24/7 Service · Niagara Region"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[0.95]", children: [
            "Niagara's local",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 103,
              columnNumber: 30
            }, void 0),
            "plumbing & heating",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 103,
              columnNumber: 58
            }, void 0),
            "you can ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-accent", children: "trust." }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 103,
              columnNumber: 72
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-3xl text-reed", children: "Otterly reliable. Professional, start to finish." }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-foreground/80 max-w-xl", children: "No corporate call centres, no runaround — just your Niagara neighbours, ready to help with every plumbing and heating need. Water heaters, sump pumps, heating systems, and everything in between." }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 113,
                columnNumber: 46
              }, void 0),
              " Call ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 113,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 112,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, void 0),
              " Book Online"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: [
              "Get a Quote ",
              /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 121,
                columnNumber: 49
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 121,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 120,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 pt-2", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 bg-card border-2 border-foreground/10 rounded-full px-3 py-1.5 shadow-soft", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex text-accent", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 fill-accent" }, i, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 126,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "font-display text-sm text-primary", children: "4.9/5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 131,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/70", children: "Trusted by Niagara homeowners & businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative hidden lg:flex justify-center items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 -m-10 rounded-full bg-water/40 blur-3xl", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: heroOtter,
              alt: "Friendly otter mascot in plumber overalls holding a red pipe wrench — Ottr Plumr Plumbing & Heating, Niagara Region",
              width: 520,
              height: 520,
              fetchPriority: "high",
              decoding: "async",
              className: "relative w-[460px] h-auto drop-shadow-[0_20px_30px_hsl(215_75%_18%/0.35)] animate-float"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 139,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full border-2 border-water-deep/60 animate-ripple", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "water-band h-12 md:h-16", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-20 md:py-28", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "What we do" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Full-service plumbing & heating" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", children: [
          "All services ",
          /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 163,
            columnNumber: 47
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-6 group hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4 shadow-soft group-hover:bg-accent transition-colors", children: /* @__PURE__ */ jsxDEV(s.icon, { className: "h-6 w-6" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-xl text-primary mb-1", children: s.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-foreground/75", children: s.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, void 0)
      ] }, s.title, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-8 md:pb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Why local matters" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-primary leading-tight", children: "A real Niagara plumber answers the phone — every time." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "When you call Ottr Plumr, you reach a local technician — not a national call centre routing you to whoever bid lowest this month. We live in the Niagara Region, our shop is at 187 King St in Welland, and we know the housing stock here cold: century homes through downtown St. Catharines and Old Glenridge, post-war bungalows in Welland and Port Colborne, lakeside cottages in Crystal Beach and Sherkston, vineyard properties in Lincoln, and brand-new builds in Grimsby and the south end of Niagara Falls." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "That local knowledge changes how we work. We know which neighbourhoods still have clay sewer laterals fighting tree roots every spring. We know which lakeshore streets need battery-backup sump pumps as a baseline. We know which 1990s subdivisions are hitting the 25-year mark on their original water heaters. We bring the right tools and the right plan on the first visit — not a parts run halfway through." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg leading-relaxed", children: "And the way we work is simple: diagnose first, quote in writing, do the work clean, leave the place tidier than we found it. Every job warrantied. Every price upfront. Same-day service for most calls, 24/7 emergency response when something can't wait. No sales scripts, no fear-selling — and if we uncover something hidden mid-job, we stop and show you before we touch it, so you can decide how to move forward." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("aside", { className: "stamp-card p-7 md:p-8 bg-gradient-hero", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "What you can expect" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "font-display text-2xl text-primary mt-1 mb-5", children: "Every Ottr Plumr call" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3.5", children: [
          "A real local technician on the phone",
          "Clear arrival window (and a heads-up text when we're on the way)",
          "Diagnostic first, then a written flat-rate quote",
          "Drop cloths, clean uniforms, tidy job site",
          "Plain-English explanation of the fix",
          "Workmanship warrantied in writing",
          "No upsells, no surprise charges"
        ].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "mt-1 h-2 w-2 rounded-full bg-accent shrink-0", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 212,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/85 text-sm md:text-base", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, void 0)
        ] }, item, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-deep text-primary-foreground py-20 md:py-28", children: /* @__PURE__ */ jsxDEV("div", { className: "container grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-primary-glow", children: "Why Ottr Plumr?" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl mt-1 mb-6", children: "Local pros. Honest work. No surprises." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-base", children: [
          ["24/7 Emergency Response", "Burst pipe at midnight? We pick up. Always."],
          ["Licensed & Insured", "Every job done to code, every time."],
          ["Upfront Pricing", "Quotes before work begins — no awkward surprises."],
          ["Niagara-Wide Coverage", "St. Catharines to Niagara Falls and every town in between."]
        ].map(([t, d]) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 shrink-0 rounded-full bg-accent grid place-items-center font-display", children: "✓" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 235,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "font-display text-lg", children: t }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 237,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "opacity-80 text-sm", children: d }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 236,
            columnNumber: 19
          }, void 0)
        ] }, t, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 234,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-card text-foreground rounded-[2rem] p-8 shadow-pop border-4 border-primary-foreground/10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-accent", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5 fill-accent" }, i, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 248,
            columnNumber: 58
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "font-display text-2xl text-primary", children: "4.9" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground/60", children: "/ 5 average rating" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80", children: "Real reviews from real Niagara customers — see what folks are saying about our work." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-20 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Customer love" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Don't take our word for it" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-5", children: REVIEWS.map((r) => /* @__PURE__ */ jsxDEV("article", { className: "stamp-card p-7 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV(Quote, { className: "h-8 w-8 text-accent mb-3" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 269,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/85 flex-1", children: r.quote }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "font-display text-primary", children: r.name }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 272,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-accent", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 fill-accent" }, i, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 274,
            columnNumber: 60
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 271,
          columnNumber: 15
        }, void 0)
      ] }, r.name, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden bg-gradient-hero py-20 md:py-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container relative grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "On the road" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary leading-tight", children: [
            "Spot us around the ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-accent", children: "Niagara Region" }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 289,
              columnNumber: 34
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/80 text-base md:text-lg max-w-xl", children: "Our service vans are out every day across the Niagara Region — ready to diagnose, repair, and get most jobs sorted on the spot. You'll spot us in your neighbourhood. Wave hi." }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 pt-2", children: [
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
              /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 297,
                columnNumber: 46
              }, void 0),
              " Call ",
              PHONE_DISPLAY
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 297,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 296,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Home.tsx",
                lineNumber: 301,
                columnNumber: 19
              }, void 0),
              " Book Online"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 300,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 299,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 295,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 286,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 -m-6 rounded-full bg-water/30 blur-3xl", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 307,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: vanWrap,
              alt: "Ottr Plumr branded service van with otter mascot — Niagara plumbing and heating",
              width: 1600,
              height: 682,
              sizes: "(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw",
              loading: "lazy",
              decoding: "async",
              className: "relative w-full h-auto drop-shadow-[0_20px_30px_hsl(215_75%_18%/0.35)]"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 308,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 306,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 283,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(BeforeAfterGallery, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container py-12 md:py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-script text-2xl text-accent", children: "Where we work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-4xl md:text-5xl text-primary mt-1", children: "Proudly serving the Niagara Region" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 329,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground/75 mt-4", children: "Every city, every town. If you're in Niagara, we're your local crew." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 330,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-2", children: CITIES.map((city) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: `/service-areas/${city.slug}`,
          className: "px-4 py-2 rounded-full bg-card border-2 border-foreground/10 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
          children: city.name
        },
        city.slug,
        false,
        {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 334,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", children: /* @__PURE__ */ jsxDEV(Link, { to: "/service-areas", children: [
        "All service areas ",
        /* @__PURE__ */ jsxDEV(ArrowRight, {}, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 345,
          columnNumber: 57
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 345,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 344,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 343,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(FAQ, { injectSchema: false }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 351,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "container pb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] overflow-hidden bg-accent text-accent-foreground p-10 md:p-14 shadow-pop relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-accent-foreground/10", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 356,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative grid md:grid-cols-[1fr_auto] gap-6 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display text-3xl md:text-4xl", children: "Got a leak, a chill, or a project?" }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 359,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "opacity-90 mt-2", children: "Pick up the phone, book online, or send us a message — we'll be there." }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 360,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 358,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-card text-primary hover:bg-card/90", children: /* @__PURE__ */ jsxDEV("a", { href: `tel:${PHONE_TEL}`, children: [
            /* @__PURE__ */ jsxDEV(Phone, {}, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 364,
              columnNumber: 46
            }, void 0),
            " ",
            PHONE_DISPLAY
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 364,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 363,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "deep", size: "lg", children: /* @__PURE__ */ jsxDEV("a", { href: JOBBER_BOOK_URL, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(CalendarCheck, {}, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 368,
              columnNumber: 19
            }, void 0),
            " Book Online"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 367,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 366,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 357,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 355,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Home.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, void 0);
};
const SERVICES = [
  {
    slug: "residential-plumbing",
    icon: Home,
    title: "Residential Plumbing",
    shortDesc: "Whole-home plumbing service for Niagara families — drains, faucets, fixtures, leaks, re-pipes, and renovations.",
    metaDescription: "Trusted residential plumbing in the Niagara Region. Drain cleaning, leak repair, fixture install, re-pipes & renovations. Call Ottr Plumr at 289-488-1007.",
    hero: "Plumbing that just works — for the whole house.",
    longDesc: [
      "Your home's plumbing should be the last thing on your mind. When something goes sideways — a slow drain, a dripping tap, a mystery leak behind a wall — you want a real local plumber who shows up when they said they would, explains what's actually wrong in plain English, and fixes it right the first time. That's the entire reason Ottr Plumr exists.",
      "We handle every residential plumbing job across the Niagara Region: from a single faucet swap on a Saturday morning to a full re-pipe during a basement renovation. Every job, big or small, gets the same treatment — shoes off at the door, drop cloths down, tools tidy, the work explained as we go, and the mess cleaned up before we leave. You'll know what we did, why we did it, and what to watch for going forward.",
      "Our crew lives in Niagara. We know the housing stock — from century homes in St. Catharines and Niagara-on-the-Lake to post-war bungalows in Welland and Port Colborne to brand-new builds in Grimsby and Lincoln. That matters. A galvanized steel supply line in a 1940s home asks for a different game plan than a PEX manifold in a 2022 build, and we bring the right experience to both.",
      "Most importantly: we quote before we work. Diagnostics first, then a clear flat-rate price, then your decision. No surprise pricing, no hidden line items added at the end. And if we open a wall and find something genuinely unexpected, we stop, show you, and give you a fresh quote before we touch it — you stay in control of every dollar."
    ],
    points: [
      "Leak detection & repair",
      "Drain cleaning & camera inspection",
      "Faucet, toilet & fixture install",
      "Kitchen & bath renovations",
      "Pipe repair & replacement",
      "Water line service",
      "Frozen pipe thawing & repair",
      "Water softener & filtration install"
    ],
    whatWeDo: [
      { title: "Drain Cleaning", desc: "Hydro-jetting, snaking, and in-pipe camera inspection to find the actual cause — tree roots, grease, scale, or a collapsed line — instead of just clearing the symptom for a week." },
      { title: "Leak Detection", desc: "Acoustic and thermal locating to track down hidden leaks behind walls, under slabs, and in ceilings — before they ruin drywall, flooring, or insulation." },
      { title: "Fixture Installation", desc: "Faucets, toilets, sinks, tubs, garbage disposals, bidet seats — installed clean, level, leak-free, and to manufacturer spec so warranties stay valid." },
      { title: "Re-Pipes & Renovations", desc: "Full or partial repipes in copper or PEX, plus rough-ins and finals for kitchen, bathroom, basement, and addition projects." },
      { title: "Water Line Service", desc: "Main water line repair and replacement — including from-the-curb work and coordination with municipal locates." },
      { title: "Water Quality", desc: "Whole-home filtration, softeners, and reverse-osmosis under-sink systems to handle Niagara's hard water and tannins." }
    ],
    whyUs: [
      "Upfront, flat-rate pricing — no hourly surprises",
      "Same-day appointments when you need one",
      "Workmanship warrantied in writing",
      "Local, licensed, and insured Niagara plumbers",
      "Clean uniforms, drop cloths, and a tidy job site",
      "We diagnose first, then quote, then work — never the other way around"
    ],
    faqs: [
      {
        q: "How quickly can you come out for a residential plumbing issue?",
        a: "For most residential calls in the Niagara Region we offer same-day or next-day service. For active leaks, no-water situations, or sewage backups, call us at 289-488-1007 and we'll dispatch as fast as possible — we run 24/7 emergency rotation."
      },
      {
        q: "Do you give quotes before starting work?",
        a: "Always. We diagnose the issue, walk you through your options (often with a quick repair vs. replace breakdown), and provide a flat-rate quote in writing before any work begins. You authorize, then we work."
      },
      {
        q: "Do you handle bathroom and kitchen renovations?",
        a: "Yes. We do rough-in plumbing for renovations as well as final fixture installs — and we coordinate cleanly with your contractor, designer, or tile setter so the schedule doesn't fall apart waiting on the plumber."
      },
      {
        q: "What's the most common cause of slow drains in Niagara homes?",
        a: "In older neighbourhoods, tree-root intrusion in clay sewer laterals is the #1 culprit. In newer builds it's almost always grease, hair, or so-called 'flushable' wipes (they aren't). A camera inspection tells us which one in about 20 minutes."
      },
      {
        q: "Can you repair frozen or burst pipes?",
        a: "Yes — we thaw, repair, and reroute frozen and burst lines, and we'll show you why it happened (uninsulated rim joist, exterior wall plumbing, drafty crawlspace) so it doesn't happen next winter."
      }
    ]
  },
  {
    slug: "commercial-plumbing",
    icon: Building2,
    title: "Commercial Plumbing",
    shortDesc: "Dependable service for retail, office, restaurant, and industrial clients. We work around your schedule, not the other way around.",
    metaDescription: "Commercial plumbing across Niagara — restaurants, retail, offices & industrial. Backflow, fixtures, emergency response & maintenance. Call 289-488-1007.",
    hero: "Plumbing built for business hours — and after hours.",
    longDesc: [
      "Downtime costs money. When a commercial plumbing issue hits — a backed-up floor drain in a restaurant kitchen at peak service, a failed backflow on a retail unit blocking opening, a leaking riser above a tenant suite — you need a crew that responds fast, works clean, and understands that the building can't just shut down for three days.",
      "Ottr Plumr serves restaurants, retail, professional offices, multi-tenant buildings, and light industrial clients across Niagara. We schedule around your operations: early-morning visits before doors open, after-hours work when needed, and weekend emergency response with itemized invoicing your accounting team will actually thank you for.",
      "We become a single point of contact for property managers running multi-site portfolios — one number, one technician who knows your buildings, one set of records. Less time spent re-explaining the same boiler room to a new contractor every quarter.",
      "And we handle the paperwork side of commercial plumbing properly: backflow certifications filed with the municipality, code-compliant grease-trap sizing for food service, and clean documentation for landlord-tenant disputes when they pop up."
    ],
    points: [
      "Backflow prevention & annual testing",
      "Commercial fixture install & repair",
      "Floor drains, grease traps & catch basins",
      "Emergency response 24/7",
      "Preventive maintenance plans",
      "Tenant fit-outs & rough-ins",
      "Hot water plant service & replacement",
      "Multi-site property management support"
    ],
    whatWeDo: [
      { title: "Backflow Prevention", desc: "Installation, certification, and annual testing of backflow preventers — keeping you compliant with municipal cross-connection control bylaws and avoiding fines." },
      { title: "Restaurant Plumbing", desc: "Grease traps, three-compartment sinks, dishwasher hookups, mop sinks, and floor drain service for food service operations of every size." },
      { title: "Property Management Support", desc: "On-call service for property managers — single point of contact across multiple buildings, consolidated invoicing, and documented service history." },
      { title: "Preventive Maintenance", desc: "Scheduled inspections, drain cleaning, water heater service, and backflow testing to prevent the after-hours emergency calls nobody wants." },
      { title: "Commercial Hot Water", desc: "Service, repair, and replacement of commercial-grade tank, tankless, and recirculating hot water systems." },
      { title: "Tenant Fit-Outs", desc: "Plumbing rough-ins and finals for new tenant build-outs — coffee shops, salons, dental offices, you name it." }
    ],
    whyUs: [
      "Insured for commercial work",
      "Off-hours and weekend service available",
      "Itemized invoicing for your accounting team",
      "Single point of contact for multi-site portfolios",
      "Documented service history per building",
      "Fast diagnosis to keep your operation moving"
    ],
    faqs: [
      {
        q: "Do you offer after-hours service for businesses?",
        a: "Yes. We schedule after-hours, evening, and weekend service for commercial clients so plumbing work doesn't disrupt your operations, customers, or tenants. Just tell us when works."
      },
      {
        q: "Can you handle ongoing maintenance for multiple properties?",
        a: "Absolutely. We work with property managers across Niagara on multi-site portfolios with consolidated monthly invoicing, a single point of contact, and a full service history available on request."
      },
      {
        q: "Do you do backflow testing and certification?",
        a: "Yes — installation, repair, and annual certified testing of backflow preventers, with documentation submitted to your municipality so you stay compliant with cross-connection control programs."
      },
      {
        q: "How fast can you respond to a commercial emergency?",
        a: "Existing commercial maintenance clients get priority dispatch — typically within 1–2 hours during business hours and same-night for after-hours emergencies. New commercial calls are handled as fast as our schedule allows, often same-day."
      },
      {
        q: "Do you provide quotes for commercial projects in writing?",
        a: "Always. Commercial work gets a detailed scope, line-item pricing, and clear assumptions in writing — so you (and your finance team) know exactly what you're approving."
      }
    ]
  },
  {
    slug: "heating-systems",
    icon: Flame,
    title: "Heating Systems",
    shortDesc: "Stay warm all winter. Furnace, boiler, and radiant heat install, repair, and tune-ups across the Niagara Region.",
    metaDescription: "Furnace, boiler & radiant heating service across Niagara. Install, repair, and annual tune-ups by licensed local pros. Call Ottr Plumr at 289-488-1007.",
    hero: "Warm homes. Reliable systems. Niagara winters handled.",
    longDesc: [
      "When the temperature drops, your heating system has exactly one job — and it had better do it. Whether you run a high-efficiency forced-air furnace, a hot water boiler with cast-iron radiators, or radiant in-floor heat in a new build, Ottr Plumr keeps Niagara homes and businesses warm through every cold snap, polar vortex, and February deep freeze the lake throws at us.",
      "We install, repair, and maintain every major brand of residential and light-commercial heating equipment, and we'll give you straight talk about whether your existing system needs a $300 fix, a $1,500 repair, or a full replacement that pays back in efficiency. No fear-selling, no 'you have to replace it today' pressure — just the numbers laid out so you can decide on your timeline.",
      "Annual tune-ups are the best $200 you spend on your house. We catch cracked heat exchangers, weak inducer motors, dirty burners, and failing zone valves before they become a no-heat call at 11pm on a Tuesday. We also keep your manufacturer warranty valid — most require documented annual service, and most homeowners don't know that.",
      "Our licensed gas technicians handle the stuff that needs a license: gas line work, conversions from oil or propane to natural gas, and proper venting for high-efficiency equipment. And every install gets the permit pulled — because the inspection is your safety net, not an inconvenience."
    ],
    points: [
      "Furnace install & repair",
      "Boiler service & install",
      "Radiant in-floor heating",
      "Annual tune-ups & safety inspections",
      "Smart thermostat upgrades",
      "Gas line & gas piping work",
      "Heat pump & dual-fuel systems",
      "Combustion analysis & venting"
    ],
    whatWeDo: [
      { title: "Furnace Service", desc: "Install, repair, and annual maintenance for high-efficiency forced-air furnaces — single-stage, two-stage, and modulating." },
      { title: "Boiler Service", desc: "Hot water and steam boiler diagnostics, repair, and replacement for cast-iron radiators, baseboard, and in-floor systems." },
      { title: "Radiant Heating", desc: "In-floor radiant heat design and installation for new builds, basement renos, additions, and bathroom comfort floors." },
      { title: "Tune-Ups", desc: "Annual safety inspections, combustion analysis, burner cleaning, and filter changes to keep your system efficient and your warranty valid." },
      { title: "Smart Thermostats", desc: "Nest, ecobee, and Honeywell smart thermostat install and configuration — including with multi-stage and dual-fuel systems." },
      { title: "Gas Line Work", desc: "Licensed gas piping for new appliances, BBQ hookups, generator gas lines, and full conversions from propane or oil to natural gas." }
    ],
    whyUs: [
      "Licensed gas technicians on staff",
      "Emergency no-heat response, year-round",
      "Honest assessment: repair vs. replace, with the math",
      "Energy-efficient equipment options for every budget",
      "Permits pulled on every install",
      "Manufacturer-trained on major brands"
    ],
    faqs: [
      {
        q: "How often should I service my furnace or boiler?",
        a: "We recommend an annual tune-up before heating season — typically late summer or early fall. It catches small issues before they become no-heat emergencies, keeps your warranty valid, and keeps your equipment running at rated efficiency (so your gas bill doesn't creep up year over year)."
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "It depends on age, efficiency, and repair cost. As a rule of thumb: if your unit is over 15 years old and the repair is more than half the cost of replacement, replacement usually pays back quickly in efficiency gains and avoided future breakdowns. We'll do the math with you, no pressure."
      },
      {
        q: "Do you handle no-heat emergencies?",
        a: "Yes — we respond to no-heat calls year-round, with priority dispatch during cold snaps. If you wake up to a freezing house, call 289-488-1007 — we'll triage over the phone and get someone moving."
      },
      {
        q: "Furnace vs. boiler — which is better?",
        a: "Both are great when sized right. Forced-air furnaces heat fast, work with central A/C ductwork, and cost less to install. Boilers give quieter, more even heat with no forced air — better for allergy sufferers and homes with cast-iron radiators. We help you pick based on your house, not on what we have in the truck."
      },
      {
        q: "Are smart thermostats worth it?",
        a: "Usually yes. A learning thermostat (Nest, ecobee) typically saves 10–15% on heating bills through smarter scheduling and away-mode detection — and the install is a one-hour job for most systems."
      }
    ],
    prosCons: {
      title: "Furnace vs. Boiler — which suits your home?",
      intro: "Both heat your home well when properly sized and installed. Here's how they compare so you can pick the right system with confidence.",
      items: [
        {
          name: "High-Efficiency Furnace",
          bestFor: "Homes with existing ductwork or central A/C",
          pros: [
            "Lower upfront install cost",
            "Heats the home quickly",
            "Shares ductwork with central A/C",
            "Easier to add filtration & humidification"
          ],
          cons: [
            "Can stir up dust and dry the air",
            "Some hot/cold spots between cycles",
            "Noisier blower than radiant or boiler systems"
          ]
        },
        {
          name: "Hot Water Boiler",
          bestFor: "Older homes with radiators or new builds with in-floor heat",
          pros: [
            "Even, comfortable, draft-free heat",
            "Very quiet operation",
            "Works great with radiant in-floor systems",
            "Long equipment life (often 20+ years)"
          ],
          cons: [
            "Higher upfront install cost",
            "Slower to recover from setbacks",
            "Needs a separate system for central A/C"
          ]
        }
      ]
    }
  },
  {
    slug: "water-heaters",
    icon: Droplets,
    title: "Water Heaters",
    shortDesc: "Hot water, every time. We install, replace, and service tank and tankless systems sized properly for your home or business.",
    metaDescription: "Tank & tankless water heater install, replacement, and repair across Niagara. Same-day service available. Call Ottr Plumr at 289-488-1007.",
    hero: "Hot showers, on demand — sized right and installed right.",
    longDesc: [
      "A failing water heater is one of those problems you only notice the moment you're already standing in the shower. Ottr Plumr installs, replaces, and services tank and tankless water heaters across the Niagara Region — usually the same day you call, because cold-shower-day is nobody's good day.",
      "We size and spec your unit based on how your household actually uses hot water — bedrooms, bathrooms, laundry habits, dishwasher cycles, simultaneous-fixture demand — not based on whatever's stacked highest at the warehouse. The result: you get hot water when you want it, your gas or hydro bill goes down, and the equipment lasts the full lifespan instead of cycling itself to death.",
      "Tank vs. tankless is the question we get most. The honest answer: it depends. Tankless gives you endless hot water, longer equipment life, and a smaller footprint, but it costs more up front and sometimes requires gas-line and venting upgrades. Tank is cheaper to install, simpler to service, and the right call for a lot of homes — especially if your existing setup works. We walk you through both options with real numbers before you decide.",
      "Every install is permitted, code-compliant, and properly vented (a surprising number of older installs aren't). We pull the permit, coordinate the inspection, and leave you with a system that's safe, efficient, and warrantied — both by the manufacturer and by us in writing."
    ],
    points: [
      "Tankless install & service",
      "Conventional tank replacement",
      "Same-day emergency replacement",
      "Energy-efficient upgrades",
      "Anode rod replacement",
      "Recirculation systems",
      "Gas-line upgrades for tankless conversions",
      "Drain pan, expansion tank & T&P valve service"
    ],
    whatWeDo: [
      { title: "Tankless Water Heaters", desc: "On-demand hot water with a smaller footprint, longer life, and lower energy bills — sized to your peak simultaneous demand, not a guess." },
      { title: "Tank Water Heaters", desc: "Reliable conventional tanks in gas or electric, professionally installed to code with new shut-offs, expansion tanks, and proper venting." },
      { title: "Repair & Service", desc: "Pilot lights, thermocouples, gas valves, thermostats, anode rods, leaks, and pressure-relief valves — diagnosed and repaired without unnecessary upselling." },
      { title: "Same-Day Replacement", desc: "Emergency replacement when your tank fails — most jobs done the same day we get the call, with the old unit hauled away." },
      { title: "Recirculation Loops", desc: "Hot water at the tap in seconds instead of minutes — added to existing systems or built into new installs." },
      { title: "Annual Maintenance", desc: "Tank flush, anode rod inspection, T&P testing, and burner cleaning — extends life by years and keeps efficiency rated." }
    ],
    whyUs: [
      "Most replacements completed in a single visit",
      "Right-sized for your household, not oversold",
      "Manufacturer-backed warranties",
      "Permits pulled and code-compliant install",
      "Old unit hauled away and disposed of properly",
      "Honest tank vs. tankless conversation, no pressure"
    ],
    faqs: [
      {
        q: "Should I switch from a tank to tankless water heater?",
        a: "If you have high simultaneous hot-water demand (multiple bathrooms running at once), want to free up floor space, or want lower long-term energy bills, tankless is often worth it. We'll walk you through the upfront cost vs. long-term savings, including any gas-line or venting upgrades, before you decide."
      },
      {
        q: "How long does a water heater installation take?",
        a: "A like-for-like tank swap is usually 2–4 hours. A first-time tankless install or a conversion (different fuel, new gas line, new vent path) typically takes a half to full day depending on the existing setup."
      },
      {
        q: "What's the lifespan of a water heater?",
        a: "Conventional gas or electric tanks last about 8–12 years on average — longer with annual maintenance and an anode rod swap at year 5. Tankless units, properly maintained with annual descaling, can run 20+ years."
      },
      {
        q: "Why does my water heater make popping or rumbling noises?",
        a: "Almost always sediment build-up at the bottom of the tank — common in Niagara because of our hard water. An annual flush usually fixes it; if the noise persists, the heat exchanger may be cracked and replacement is the smart move."
      },
      {
        q: "Can you do same-day water heater replacement?",
        a: "Yes — most standard tank replacements we can do same-day. Call us by mid-morning and you're showering hot that night. Tankless conversions usually need a day or two to source the right unit."
      }
    ],
    prosCons: {
      title: "Tank vs. Tankless Water Heater",
      intro: "Both deliver reliable hot water — the right choice comes down to your household's demand, your budget, and your space. Here's the honest breakdown.",
      items: [
        {
          name: "Conventional Tank",
          bestFor: "Smaller homes, predictable demand, tighter budgets",
          pros: [
            "Lower upfront cost",
            "Simple, well-understood technology",
            "Cheaper repairs and parts",
            "Works during a brief power outage (gas models)"
          ],
          cons: [
            "Limited hot water — runs out during heavy use",
            "Standby heat loss adds to energy bills",
            "Shorter lifespan (8–12 years on average)",
            "Takes up floor space"
          ]
        },
        {
          name: "Tankless (On-Demand)",
          bestFor: "Larger homes, multiple bathrooms, long-term owners",
          pros: [
            "Endless hot water on demand",
            "20+ year lifespan with maintenance",
            "Lower energy bills (no standby loss)",
            "Wall-mounted — frees up floor space"
          ],
          cons: [
            "Higher upfront cost",
            "May need gas-line or venting upgrade",
            "Annual descaling recommended in hard-water areas",
            "Slightly slower initial hot-water delivery"
          ]
        }
      ]
    }
  },
  {
    slug: "sump-pumps",
    icon: ShieldCheck,
    title: "Sump Pumps",
    shortDesc: "Don't wait for the next storm. Pro-grade sump pumps and battery backups keep your basement dry year-round.",
    metaDescription: "Sump pump install, replacement, and battery backup systems across Niagara. Keep your basement dry. Call Ottr Plumr at 289-488-1007.",
    hero: "Dry basements, even during the worst Niagara storms.",
    longDesc: [
      "Niagara weather doesn't mess around. One spring storm, one summer downpour, or one fast snowmelt event is all it takes to flood a basement — and the cost of water damage (drywall, flooring, contents, mould remediation) dwarfs the cost of a properly-installed sump pump and battery backup system by an order of magnitude.",
      "Ottr Plumr installs, replaces, and services sump pumps and battery backup units for homes across the region — from low-lying neighbourhoods near the canal in Welland to lakeside properties in Crystal Beach and Port Dalhousie where the water table is genuinely no joke. We test and tune existing systems annually, and we'll spec the right pump for your basement size, water table, and risk level — not the cheapest pump on the shelf.",
      "Most basement floods we see are entirely preventable. The pump was undersized, the discharge line was frozen or pitched wrong, the float switch had jammed, or — most often — the power went out during exactly the storm that needed the pump. A battery backup system is the single best insurance policy a Niagara homeowner can buy.",
      "And yes, we'll install a water alarm with a Wi-Fi sensor too, so your phone buzzes the second water touches the pit — even if you're at the cottage or on vacation."
    ],
    points: [
      "New install & replacement",
      "Battery backup systems",
      "Discharge line service",
      "Annual testing & maintenance",
      "Pit cleaning & float adjustment",
      "Water alarm install (Wi-Fi enabled)",
      "Cast-iron & stainless pump options",
      "Sewage ejector pumps"
    ],
    whatWeDo: [
      { title: "Sump Pump Install", desc: "New installs and replacements with quality cast-iron and stainless pumps — sized to your basement footprint and water-table conditions, not just guessed at." },
      { title: "Battery Backup Systems", desc: "Backup pumps that keep working when the power goes out — exactly when you need them most. Storms cause both flooding and outages, and your primary pump is useless without electricity." },
      { title: "Discharge Line Service", desc: "Frozen, clogged, or wrongly-pitched discharge lines repaired or rerouted, with proper freeze-resistant terminations for Niagara winters." },
      { title: "Annual Testing", desc: "Pre-spring testing, pit cleaning, and float verification to make sure your pump is ready before storm season actually hits." },
      { title: "Sewage Ejector Pumps", desc: "Ejector pump install and service for basement bathrooms, laundry, and below-grade fixtures." },
      { title: "Water Alarms", desc: "Wi-Fi-enabled water sensors that ping your phone the moment water touches the pit, giving you a real chance to act before damage spreads." }
    ],
    whyUs: [
      "Pumps sized for your specific basement and water table",
      "Backup options for power outages",
      "Annual maintenance plans available",
      "Rapid response when pumps fail mid-storm",
      "Quality cast-iron & stainless pumps, not bargain-bin",
      "Honest advice on backup vs. no-backup — never a hard sell"
    ],
    faqs: [
      {
        q: "Do I need a battery backup sump pump?",
        a: "If your basement is finished, you have a sewage ejector pump, or you store anything valuable down there — yes. The biggest storms are exactly the ones that knock out power, and your primary pump is just an expensive paperweight without electricity. Backup systems pay for themselves the first time they save you."
      },
      {
        q: "How often should a sump pump be replaced?",
        a: "Most sump pumps last 7–10 years. We recommend planned replacement at the 10-year mark even if it's still running — the cost of a planned swap is a small fraction of the cost of cleanup after a failure during a storm."
      },
      {
        q: "How do I know if my sump pump is working?",
        a: "Pour a 5-gallon bucket of water slowly into the pit. The pump should kick on, drain it, and shut off cleanly without short-cycling. If it hesitates, runs rough, or doesn't shut off cleanly — call us before the next storm, not after."
      },
      {
        q: "Why does my sump pump run constantly?",
        a: "Usually one of three things: a stuck float switch, a high water table after heavy rain, or a broken/missing check valve causing water to flow back into the pit. A short diagnostic visit tells us which."
      },
      {
        q: "Can the discharge line freeze in winter?",
        a: "Yes — and it's a common cause of mid-winter basement floods in Niagara. We use freeze-resistant terminations, proper pitch, and discharge points placed where snow won't pile up against them."
      }
    ],
    prosCons: {
      title: "Primary pump only vs. Primary + Battery Backup",
      intro: "A primary pump handles routine duty just fine — until the power goes out. Here's the honest case for adding a battery backup.",
      items: [
        {
          name: "Primary Pump Only",
          bestFor: "Unfinished basements with very low flood risk and reliable power",
          pros: [
            "Lower upfront cost",
            "Simpler system, fewer components",
            "Less maintenance to track"
          ],
          cons: [
            "Useless during a power outage",
            "Single point of failure",
            "No protection if the pump itself fails mid-storm",
            "Higher long-term risk of catastrophic flood damage"
          ]
        },
        {
          name: "Primary + Battery Backup",
          bestFor: "Finished basements, high water tables, lakeside or low-lying homes",
          pros: [
            "Keeps pumping through power outages",
            "Redundant protection if the primary pump fails",
            "Built-in alarms for high-water and low-battery alerts",
            "Pays for itself the first time a storm knocks out power"
          ],
          cons: [
            "Higher upfront cost",
            "Battery needs replacement every 3–5 years",
            "More components to maintain annually"
          ]
        }
      ]
    }
  },
  {
    slug: "repairs-diagnostics",
    icon: Wrench,
    title: "Repairs & Diagnostics",
    shortDesc: "Honest diagnosis. Fair price. We fix what's broken without trying to sell you what isn't.",
    metaDescription: "Plumbing repairs and diagnostics across Niagara — honest assessments, upfront pricing, warrantied work. Call Ottr Plumr at 289-488-1007.",
    hero: "Honest diagnosis. Fair price. Warrantied work.",
    longDesc: [
      "Some plumbers see a service call as a sales call. We don't. When you book Ottr Plumr for a repair or diagnostic, we tell you exactly what's wrong, what it'll cost to fix, and whether it's even worth fixing at all. If your 22-year-old water heater needs a $400 repair and is six months from failing anyway, we'll say so — and let you decide.",
      "Whether it's a mystery leak under the kitchen sink, low water pressure that crept up over months, a noisy pipe that bangs every time the dishwasher runs, or a fixture that just won't behave — we diagnose it properly using the right tools (acoustic locators, in-pipe cameras, pressure gauges, combustion analyzers when heating is involved), explain it to you in plain English, and quote the fix in writing before we lift a wrench.",
      "We're also the people locals call for second opinions. If you've been quoted a $4,200 sewer-line replacement and your gut says something's off, we'll come out, run a camera, and give you an honest read on whether you really need a full replacement or whether a spot repair fixes it. No obligation to book the work with us.",
      "Our diagnostic fee is flat, transparent, and credited toward the repair if you book us to do the work. You always know the cost before we arrive — no 'trip charge plus hourly plus parts plus a markup we won't explain.'"
    ],
    points: [
      "Upfront flat-rate pricing",
      "Same-day appointments",
      "Warrantied work in writing",
      "Clean, tidy job sites",
      "In-pipe camera inspections",
      "Pressure & flow testing",
      "Acoustic & thermal leak detection",
      "No-obligation second opinions"
    ],
    whatWeDo: [
      { title: "Diagnostic Visits", desc: "We find the actual root cause — not just the symptom — and walk you through every realistic repair option with pros, cons, and price." },
      { title: "Leak & Pressure Issues", desc: "Hidden leaks, low water pressure, water hammer, noisy pipes, and unexplained high water bills — diagnosed and resolved." },
      { title: "Camera Inspections", desc: "In-pipe video inspection for drains, sewer laterals, and main water lines — recorded so you can see exactly what's going on." },
      { title: "Second Opinions", desc: "Got a quote that feels off? We'll give you an honest second opinion at no obligation. Sometimes the first quote is right; sometimes it isn't." },
      { title: "Pre-Purchase Inspections", desc: "Buying a home in Niagara? We'll do a focused plumbing inspection on top of the home inspector's general report — sewer scope included." },
      { title: "Repair vs. Replace Analysis", desc: "Old water heater? Aging furnace? Galvanized supply lines? We'll do the math with you so you can make a confident long-term decision." }
    ],
    whyUs: [
      "We never upsell what you don't need",
      "Written diagnosis and quote before work begins",
      "All repairs warrantied",
      "Clean uniforms, drop cloths, and tidy job sites",
      "Diagnostic fee credited toward repair",
      "Plain-English explanations, no jargon walls"
    ],
    faqs: [
      {
        q: "Do you charge for diagnostics?",
        a: "We charge a flat diagnostic fee that's credited toward the repair if you book the work with us. You always know the cost before we arrive — no surprise trip charges, no hourly meter running while we look. If we uncover something hidden during the work, we pause, show you what we found, and re-quote before continuing."
      },
      {
        q: "How fast can you come out for a repair?",
        a: "Most non-emergency repairs are scheduled same-day or next-day. Emergencies — active leaks, no water, no heat, sewage backups — get priority dispatch around the clock."
      },
      {
        q: "Do you warranty your repair work?",
        a: "Yes. Labor and parts are warrantied in writing. If something we fixed isn't right, we come back and make it right — no charge, no argument."
      },
      {
        q: "Will you give me a second opinion on someone else's quote?",
        a: "Absolutely. We get second-opinion calls every week. We'll do an honest diagnostic, give you our take, and let you decide who to hire — including if that ends up being the other contractor."
      },
      {
        q: "Can you inspect plumbing on a house I'm buying?",
        a: "Yes — pre-purchase plumbing inspections are one of our most valuable services. We focus on the stuff a general home inspector doesn't (sewer-line camera scope, water heater age & condition, supply line material, drain slope) so you go in eyes wide open."
      }
    ]
  }
];
const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
const POSTS = [
  {
    slug: "frozen-pipes-welland-prevention",
    title: "Frozen Pipes in Welland: How to Prevent Them (and What to Do if They Burst)",
    excerpt: "Welland winters can drop fast. Here's exactly how local homeowners can prevent frozen pipes — and what to do if it's already too late.",
    metaDescription: "Frozen pipes in Welland, ON? Learn how to prevent and thaw them safely, plus when to call an emergency plumber. Local advice from Ottr Plumr.",
    city: "Welland",
    citySlug: "welland",
    service: "Repairs & Diagnostics",
    serviceSlug: "repairs-diagnostics",
    publishedAt: "2025-11-12",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "If you've lived through a Welland winter, you already know — when the wind whips off the canal and overnight temperatures plunge into the negatives, exposed pipes become a real liability. Frozen pipes are one of the most common emergency calls we get across the Niagara Region, and they're almost always preventable."
      },
      { type: "h2", text: "Why Welland homes are especially at risk" },
      {
        type: "p",
        text: "Welland's older neighbourhoods like Crowland, Dain City, and Cooks Mills have plenty of homes built before modern insulation standards. Crawlspaces, unheated basements, and exterior wall plumbing runs are common — and those are exactly the spots that freeze first when the temperature drops below -10°C."
      },
      { type: "h2", text: "5 prevention steps every Welland homeowner should take" },
      {
        type: "ul",
        items: [
          "Insulate any exposed pipes in basements, crawlspaces, attics, and garages with foam pipe sleeves.",
          "On extreme cold nights, let one or two faucets drip — moving water resists freezing.",
          "Open kitchen and bathroom cabinet doors so warm air reaches plumbing on exterior walls.",
          "Disconnect garden hoses and shut off the interior valves to outdoor spigots before the first hard freeze.",
          "Keep your thermostat at 18°C (65°F) or higher overnight — even if you're away."
        ]
      },
      { type: "h2", text: "What to do if a pipe freezes" },
      {
        type: "p",
        text: "If you turn on a tap and only get a trickle, suspect a freeze. Shut off your main water valve immediately — if the pipe has cracked, you want to limit the damage when it thaws. Then call a licensed plumber. Never use an open flame to thaw a pipe; we use safe heating cables and warm towels to thaw without splitting the line."
      },
      { type: "h2", text: "Burst pipe? Call us 24/7" },
      {
        type: "p",
        text: "If you're already standing in water, every minute matters. Ottr Plumr runs 24/7 emergency service across Welland and the entire Niagara Region. Call 289-488-1007 — we'll dispatch fast and stop the damage."
      }
    ]
  },
  {
    slug: "tankless-vs-tank-water-heater-niagara",
    title: "Tankless vs Tank Water Heater in Niagara: Which Should You Choose?",
    excerpt: "Tankless water heaters get all the hype, but they're not always the right call. Here's our honest, Niagara-specific breakdown.",
    metaDescription: "Tankless vs tank water heater in the Niagara Region — costs, lifespan, and which makes sense for your home. Honest advice from Ottr Plumr.",
    city: "Niagara Region",
    service: "Water Heaters",
    serviceSlug: "water-heaters",
    publishedAt: "2025-11-05",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: `We get this question on almost every water heater replacement quote in St. Catharines, Niagara Falls, and Welland: "Should I switch to tankless?" The honest answer is — it depends. Here's a no-nonsense breakdown to help you decide before your old tank lets go in the middle of a shower.`
      },
      { type: "h2", text: "How each system works" },
      {
        type: "h3",
        text: "Conventional tank"
      },
      {
        type: "p",
        text: "A tank water heater stores 40–75 gallons of pre-heated water, ready to go. When you draw hot water, the tank refills and reheats. Simple, proven, affordable — but you're heating water 24/7 even when you don't use it."
      },
      { type: "h3", text: "Tankless (on-demand)" },
      {
        type: "p",
        text: "A tankless unit fires up only when you turn on a hot tap, heating water as it flows through. No standby losses, smaller footprint, longer lifespan — but a higher upfront cost and sometimes a need for upgraded gas lines or venting."
      },
      { type: "h2", text: "Cost comparison (Niagara averages)" },
      {
        type: "ul",
        items: [
          "Tank install: typically $1,800–$2,800 supplied and installed.",
          "Tankless install: typically $4,500–$6,500 depending on gas, venting, and electrical upgrades.",
          "Tank lifespan: 8–12 years.",
          "Tankless lifespan: 18–22 years with annual descaling.",
          "Annual energy savings with tankless: roughly 20–35% of your hot water heating cost."
        ]
      },
      { type: "h2", text: "When tankless makes sense" },
      {
        type: "ul",
        items: [
          "Larger households (4+ people) with overlapping showers and laundry.",
          "Homes where floor space is at a premium.",
          "Long-term homeowners who'll recoup the upfront cost over 10+ years.",
          "Anyone planning a major reno where gas and venting are already being touched."
        ]
      },
      { type: "h2", text: "When a tank is still the smart pick" },
      {
        type: "ul",
        items: [
          "Tight budget — you need hot water back today.",
          "Smaller households with predictable usage.",
          "Older homes with limited gas line capacity.",
          "Rental properties where ROI math doesn't pencil out."
        ]
      },
      { type: "h2", text: "Get a real quote, not a sales pitch" },
      {
        type: "p",
        text: "We've installed both across every city in Niagara — and we'll tell you straight which one fits your home and your budget. Call 289-488-1007 for a free water heater consultation."
      }
    ]
  },
  {
    slug: "basement-flooding-st-catharines-spring",
    title: "Basement Flooding in St. Catharines: Why Spring is the Worst (and How to Be Ready)",
    excerpt: "From snowmelt to spring storms, St. Catharines basements take a beating in March and April. Here's how to keep yours dry.",
    metaDescription: "Prevent basement flooding in St. Catharines. Sump pump tips, backup options, and emergency response from Ottr Plumr Plumbing & Heating.",
    city: "St. Catharines",
    citySlug: "st-catharines",
    service: "Sump Pumps",
    serviceSlug: "sump-pumps",
    publishedAt: "2025-10-28",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "St. Catharines homes — especially in older neighbourhoods like Western Hill, Glenridge, and Merritton — are vulnerable to basement flooding every spring. The combination of melting snow, saturated ground, and heavy April rains pushes the local water table up and overwhelms unprepared sump systems."
      },
      { type: "h2", text: "Why spring floods St. Catharines basements" },
      {
        type: "p",
        text: "Two things happen in March and April: the frozen ground thaws and can no longer absorb water, and our spring storm cycle dumps an enormous amount of rain in short bursts. If your sump pump is undersized, your discharge line is clogged, or you don't have a battery backup — you're rolling the dice."
      },
      { type: "h2", text: "5 things to do before April" },
      {
        type: "ul",
        items: [
          "Test your sump pump now — pour a bucket of water in the pit and confirm the float trips and the pump fully drains it.",
          "Inspect the discharge line for cracks, ice, or clogs and make sure it points well away from your foundation.",
          "Add a battery backup pump — 80% of basement floods happen during storms that knock out power.",
          "Install a water alarm in the pit so you get an alert before it overflows.",
          "Replace any sump pump older than 8 years — they almost always fail under load, not at rest."
        ]
      },
      { type: "h2", text: "Already flooding? Here's what to do" },
      {
        type: "p",
        text: "If you have water coming in right now: cut power to the basement at the breaker before stepping in. Move valuables to higher ground. Then call us — we run 24/7 emergency service and can usually have a tech in St. Catharines within the hour."
      }
    ]
  },
  {
    slug: "furnace-not-heating-niagara-falls",
    title: "Furnace Not Heating in Niagara Falls? 7 Things to Check Before You Call",
    excerpt: "Before you call a no-heat emergency, run through this 5-minute homeowner checklist. Half the time, you can fix it yourself.",
    metaDescription: "Furnace not heating in Niagara Falls? Try these 7 quick fixes first. If you still need help, Ottr Plumr offers 24/7 emergency furnace service.",
    city: "Niagara Falls",
    citySlug: "niagara-falls",
    service: "Heating Systems",
    serviceSlug: "heating-systems",
    publishedAt: "2025-10-15",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Furnace stopped blowing warm air? Don't panic — and don't necessarily book an after-hours service call yet. Niagara Falls homeowners can often resolve a no-heat issue in five minutes with this checklist before paying for an emergency dispatch."
      },
      { type: "h2", text: "1. Check the thermostat" },
      {
        type: "p",
        text: `Make sure it's set to HEAT, the temperature is set above the room temperature, and the batteries (if applicable) aren't dead. It sounds obvious — it's the #1 cause of "my furnace isn't working" calls.`
      },
      { type: "h2", text: "2. Replace the air filter" },
      {
        type: "p",
        text: "A clogged filter can cause your furnace to overheat and shut down on a safety. If your filter looks grey or you can't remember the last time you changed it — change it now and try again."
      },
      { type: "h2", text: "3. Check the breaker and furnace switch" },
      {
        type: "p",
        text: "Most furnaces have a regular wall switch (looks like a light switch) on or near the unit. Make sure it's ON. Then check your electrical panel for a tripped breaker."
      },
      { type: "h2", text: "4. Confirm gas is on" },
      {
        type: "p",
        text: "Check that the gas valve at the furnace is in the open position and that other gas appliances in your home are working."
      },
      { type: "h2", text: "5. Look for a blinking diagnostic light" },
      {
        type: "p",
        text: "Most modern furnaces have an LED behind a small viewing window that blinks an error code. Count the blinks and look up your model — it'll tell you exactly what's wrong."
      },
      { type: "h2", text: "6. Check the condensate drain" },
      {
        type: "p",
        text: "High-efficiency furnaces can shut down if the condensate line is clogged. If you see water around the unit, this is likely the cause."
      },
      { type: "h2", text: "7. Cycle the power" },
      {
        type: "p",
        text: "Turn the furnace switch off, wait 30 seconds, and turn it back on. Sometimes the control board just needs a reset."
      },
      { type: "h2", text: "Still no heat?" },
      {
        type: "p",
        text: "Call us at 289-488-1007. We respond to no-heat emergencies in Niagara Falls 24/7, and we'll always quote the repair before we start work."
      }
    ]
  },
  {
    slug: "clogged-drain-niagara-diy-vs-pro",
    title: "Clogged Drain in Niagara: DIY Fixes vs When to Call a Plumber",
    excerpt: "Some clogs you can clear with a plunger. Others need a camera and a snake. Here's how to tell the difference before you make it worse.",
    metaDescription: "Clogged drain in the Niagara Region? Learn which DIY fixes work, what to avoid (chemical drain cleaners!), and when to call Ottr Plumr.",
    city: "Niagara Region",
    service: "Residential Plumbing",
    serviceSlug: "residential-plumbing",
    publishedAt: "2025-10-02",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "A slow drain doesn't always mean a service call. But the wrong DIY fix — especially harsh chemical drain cleaners — can damage your pipes and turn a $200 problem into a $2,000 one. Here's our honest field guide."
      },
      { type: "h2", text: "Try these DIY fixes first" },
      {
        type: "ul",
        items: [
          "Plunger — works on toilets, tubs, and sinks. Cover the overflow with a wet rag for a better seal.",
          "Boiling water + dish soap — great for grease clogs in kitchen sinks.",
          "Baking soda + vinegar + hot water flush — gentle and pipe-safe.",
          "Plastic drain snake (the cheap zip kind) — surprisingly effective on hair clogs in bathroom sinks and tubs."
        ]
      },
      { type: "h2", text: "Avoid chemical drain cleaners" },
      {
        type: "p",
        text: "Drano and similar products are caustic. They can soften PVC, corrode metal pipes over time, and create a hazardous situation for any plumber who has to open the line afterward. Skip them."
      },
      { type: "h2", text: "When to call a plumber" },
      {
        type: "ul",
        items: [
          "Multiple drains backed up at once — points to a main line clog.",
          "Sewage smell or gurgling sounds — possible vent or sewer issue.",
          "Recurring clogs in the same spot — there's a deeper cause your plunger can't reach.",
          "Water backing up into a different fixture when you flush — a serious main line problem.",
          "Standing water that won't move after a thorough plunge."
        ]
      },
      { type: "h2", text: "What we do" },
      {
        type: "p",
        text: "For tough clogs we run a camera to see exactly what's happening — roots, grease buildup, broken pipes, or foreign objects — then clear it with the right tool: snake, hydro-jet, or repair if needed. No guessing, no upsell. Call 289-488-1007 across Niagara."
      }
    ]
  },
  {
    slug: "annual-plumbing-maintenance-checklist-niagara",
    title: "Annual Plumbing Maintenance Checklist for Niagara Homeowners",
    excerpt: "An hour of maintenance each year saves thousands in emergency repairs. Here's what every Niagara homeowner should check.",
    metaDescription: "Annual home plumbing maintenance checklist for Niagara Region homeowners. Prevent leaks, clogs, and water heater failures with these simple steps.",
    city: "Niagara Region",
    service: "Repairs & Diagnostics",
    serviceSlug: "repairs-diagnostics",
    publishedAt: "2025-09-20",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "We see the same preventable failures over and over: water heaters that rusted through, sump pumps that seized up, valves that won't close when they're needed most. An hour of preventive maintenance every year keeps your plumbing system running and saves you from 3 a.m. emergency calls."
      },
      { type: "h2", text: "Spring (March – May)" },
      {
        type: "ul",
        items: [
          "Test your sump pump and check the discharge line.",
          "Inspect outdoor spigots for freeze damage and reattach garden hoses.",
          "Check washing machine hoses for bulges or cracks — replace every 5 years.",
          "Walk the basement looking for any signs of moisture or staining."
        ]
      },
      { type: "h2", text: "Summer (June – August)" },
      {
        type: "ul",
        items: [
          "Drain and flush your water heater to remove sediment.",
          "Inspect the anode rod (replace if more than 50% consumed).",
          "Check toilet flappers and fill valves — silent leaks waste thousands of litres per year.",
          "Test all main shutoff valves to ensure they still turn."
        ]
      },
      { type: "h2", text: "Fall (September – November)" },
      {
        type: "ul",
        items: [
          "Book a furnace tune-up before heating season.",
          "Disconnect outdoor hoses and shut off interior valves to outdoor spigots.",
          "Insulate any exposed pipes in unheated areas.",
          "Test smoke and CO detectors — especially near gas appliances."
        ]
      },
      { type: "h2", text: "Winter (December – February)" },
      {
        type: "ul",
        items: [
          "On extreme cold nights, drip faucets on exterior walls.",
          "Open cabinets under sinks on exterior walls to circulate warm air.",
          "Know where your main shutoff valve is — and make sure it works.",
          "Keep the thermostat at 18°C (65°F) minimum, even when away."
        ]
      },
      { type: "h2", text: "Want a pro to do it for you?" },
      {
        type: "p",
        text: "Ottr Plumr offers annual maintenance plans across Niagara — one visit, one flat price, every check on this list and more. Call 289-488-1007 to set yours up."
      }
    ]
  }
];
const getPostBySlug = (slug) => POSTS.find((p) => p.slug === slug);
const Services = lazy(() => import("./assets/Services-cHygwumL.js"));
const Service = lazy(() => import("./assets/Service-BMsvk7Z8.js"));
const ServiceCity = lazy(() => import("./assets/ServiceCity-BjOOQOBJ.js"));
const ServiceAreas = lazy(() => import("./assets/ServiceAreas-DdZg8wSd.js"));
const ServiceArea = lazy(() => import("./assets/ServiceArea-0SLJ8GVO.js"));
const About = lazy(() => import("./assets/About-BbBKqiAe.js"));
const Contact = lazy(() => import("./assets/Contact-BkuCZUDS.js"));
const Nap = lazy(() => import("./assets/Nap-DjwVtxkI.js"));
const Blog = lazy(() => import("./assets/Blog-DF3MhDhz.js"));
const BlogPost = lazy(() => import("./assets/BlogPost-Bn3OHYMq.js"));
const NotFound = lazy(() => import("./assets/NotFound-D-nFjAvm.js"));
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: Services },
      {
        path: "services/:slug",
        Component: Service,
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`)
      },
      {
        path: "services/:service/:city",
        Component: ServiceCity,
        getStaticPaths: () => SERVICES.flatMap(
          (s) => CITIES.map((c) => `services/${s.slug}/${c.slug}`)
        )
      },
      { path: "service-areas", Component: ServiceAreas },
      {
        path: "service-areas/:slug",
        Component: ServiceArea,
        getStaticPaths: () => CITIES.map((c) => `service-areas/${c.slug}`)
      },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "nap", Component: Nap },
      { path: "blog", Component: Blog },
      {
        path: "blog/:slug",
        Component: BlogPost,
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`)
      },
      // Catch-all 404 (last)
      { path: "*", Component: NotFound }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  ADDRESS_LINE as A,
  Button as B,
  CITIES as C,
  EMAIL as E,
  FAQ as F,
  GOOGLE_MAPS_URL as G,
  JOBBER_BOOK_URL as J,
  PHONE_TEL as P,
  REVIEWS as R,
  SERVICES as S,
  Seo as a,
  PHONE_DISPLAY as b,
  JOBBER_CLIENT_HUB_URL as c,
  createRoot,
  ADDRESS as d,
  POSTS as e,
  getPostBySlug as f,
  getServiceBySlug as g,
  toast as t,
  useSeo as u
};
