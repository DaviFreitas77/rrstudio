const locations = [
	{
		name: "Unidade Centro",
		address: "Avenida Cásper Líbero, 538, São Paulo, SP, 01033-001",
		mapUrl:
			"https://www.google.com/maps?q=Avenida+Cásper+Líbero,+538,+São+Paulo,+SP,+01033-001&output=embed",
	},
	{
		name: "Unidade Tatuapé",
		address: "Tatuapé, São Paulo, SP",
		mapUrl:
			"https://www.google.com/maps?q=Tatuapé,+São+Paulo,+SP&output=embed",
	},
];

export function Location() {
	const mainLocation = locations[0];

	return (
		<section
			id="localizacao"
			className="max-w-full overflow-x-hidden border-b border-muted bg-background px-4 py-16 lg:px-10 lg:py-24"
		>
			<div className="mx-auto grid min-w-0 max-w-88xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
				<div>
					<span className="block text-left text-xs font-medium uppercase tracking-[0.2em] text-destaque">
						Onde estamos
					</span>
					<h2 className="mt-4 max-w-xl text-left text-4xl leading-[0.98] text-ink sm:text-5xl">
						Encontre a unidade mais perto de você.
					</h2>

					<div className="mt-8 space-y-6 border-y border-ink/15 py-6">
						{locations.map((location, index) => (
							<div
								key={location.name}
								className={index > 0 ? "border-t border-ink/15 pt-6" : ""}
							>
								<p className="text-xs font-medium uppercase tracking-[0.18em] text-destaque">
									{location.name}
								</p>
								<p className="mt-2 max-w-sm text-base leading-relaxed text-ink/70">
									{location.address}
								</p>
								<a
									href={location.mapUrl.replace("&output=embed", "")}
									target="_blank"
									rel="noreferrer"
									className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.16em] text-ink underline decoration-destaque underline-offset-4"
								>
									Como chegar
								</a>
							</div>
						))}
					</div>
				</div>

				<div className="relative min-w-0 max-w-full aspect-[4/3] min-h-[360px] overflow-hidden bg-muted lg:min-h-[520px]">
					<iframe
						title={`Mapa da ${mainLocation.name}`}
						src={mainLocation.mapUrl}
						className="block h-full max-w-full w-full border-0 grayscale"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	);
}
