namespace $ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $gravity_animal_edit , {

		Sections: {
			padding: rem(.75),
		},

		Weight: {
			String: {
				textAlign: 'left',
			},
		},

		Ear: {
			alignSelf: 'stretch',
		},

	} )

	$mol_style_define( $gravity_animal_edit_section , {
		margin: 0,
		padding: 0,
	})
	
	$mol_style_define( $gravity_animal_edit_group , {
		
		margin: 0,
		padding: 0,

		flex: {
			grow: 1,
			shrink: 1,
			basis: rem(30),
		},

		$mol_form_field: {
			flex: {
				grow: 1,
				shrink: 0,
				basis: rem(15),
			},
		},

	} )

	$mol_style_define( $gravity_animal_edit_links , {
		
		Add: {
			flex: {
				grow: 1,
			},
		},

	} )

}
