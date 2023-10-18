{
  type Draggable = {
    drag: () => void;
  };

  type Resizable = {
    resize: () => void;
  };

  // intersection
  type UIWidget = Draggable & Resizable;

  const textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
  };

  textBox.resize();
}
