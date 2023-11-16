const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90;
      const yOffset = section.getBoundingClientRect().top - headerHeight;

      window.scrollBy({
        top: yOffset,
      });
    }
  };

  export default scrollToSection