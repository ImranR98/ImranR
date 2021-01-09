import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    state,
} from '@angular/animations';

export const fader =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('routeAnimations', [

        // route 'enter' transition
        transition('about <=> home, about <=> experience, about <=> education, about <=> projects, about <=> skills, education <=> home, education <=> experience, education <=> projects, education <=> skills, education <=> about, experience <=> home, experience <=> education, experience <=> projects, experience <=> skills, experience <=> about, home <=> experience, home <=> education, home <=> projects, home <=> skills, home <=> about, projects <=> home, projects <=> experience, projects <=> education, projects <=> skills, projects <=> about, skills <=> home, skills <=> experience, skills <=> education, skills <=> projects, skills <=> about', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('600ms ease', style({ opacity: 1 }))
        ]),

        // route 'enter' transition
        transition('* => home, * => experience, * => education, * => projects, * => skills, * => about', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('2400ms ease', style({ opacity: 1 }))
        ]),
    ]);