export const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    hidden: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const fadeInContainerProps = {
    variants: { ...containerVariants },
    initial: "hidden",
    animate: "visible",
}

export const fadeInVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
}

export const fadeInWithSpinVariants = {
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: "0deg",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    hidden: {
        opacity: 0,
        scale: 1.5,
        rotateZ: "90deg",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export const fadeInProps = {
    variants: { ...fadeInVariants },
    initial: "hidden",
    animate: "visible",
}

export const fadeInChildProps = {
    variants: { ...fadeInVariants },
}

export const fadeInWithSpinChildProps = {
    variants: { ...fadeInWithSpinVariants },
}

// TODO: Use TSDoc @example comments for this
// Example:
// <motion.div {...fadeInProps}>

// <motion.div {...containerProps}>
//     something.map(a) =>
//     <motion.div key={a] variants={fadeInVariants}}>

export const fadeInWhileInViewProps = {
    variants: { ...fadeInVariants },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
}

const scrollInFromTopVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.25,
            ease: "easeOut",
            duration: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        y: "-100%",
    },
}

export const scrollInFromTopProps = {
    variants: { ...scrollInFromTopVariants },
    initial: "hidden",
    animate: "visible",
}

// TODO: Make these into functional components instead. See https://stackoverflow.com/a/30417476/5621850
// Does that work for elements other than div though? Maybe this should just be a function that takes in a type, duration, and delay
