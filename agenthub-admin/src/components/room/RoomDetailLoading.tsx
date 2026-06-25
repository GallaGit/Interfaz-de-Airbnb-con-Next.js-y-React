const RoomDetailLoading = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-background-secondary p-12"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-[3px] border-border-subtle border-t-brand"
        role="status"
        aria-label="Cargando"
      />
      <p className="text-sm font-medium text-muted">Cargando detalle de habitación...</p>
    </section>
  );
};

export default RoomDetailLoading;
