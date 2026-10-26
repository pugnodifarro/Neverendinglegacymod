/*=====================================================================
  TRIBAL ALCHEMY - a content mod for NeverEnding Legacy
  ---------------------------------------------------------------------
  Adds:
    - 2 new resources to find in the land  : amber, glowing crystal
    - 2 crafted resources                  : charm, lantern
    - 2 new "goods" scattered across lands : amber seam, crystal vein
    - 1 new harvesting context             : Prospecting
    - 4 new technologies
    - 3 new units  : prospector, charmsmith (2 modes), amber shrine
    - 1 new policy : amber offering
    - Daily effects: lanterns light the nights (insight), shrines burn
      amber for culture & faith, and a rare "Glimmering Night" event.
    - WAR: 2 techs, the "warrior" unit and the "rival relations" policy
      (peace / border skirmishes / total war) against a rival tribe.
      Total war is a tug-of-war on a 0-100 front line: win and the rival
      pays tribute (but comes back stronger next time), lose and you
      pay the price. Warriors get wounded in battle.

  Load it on top of the base game (keep "data.js" in the mod list).
  Start a NEW game afterwards: new goods change the generated map.
=====================================================================*/

G.AddData({
	name: 'Tribal Alchemy',
	author: 'Claude',
	desc: 'Amber, glowing crystals, charms, lanterns and shrines: a small mod that adds a prospecting and crafting chain to the early game.',
	engineVersion: 1,
	sheets: { 'alchemy': 'data:image/png;base64,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' },
	func: function ()
	{
		var SHEET = 'alchemy';
		function ico(x, y) { return [x, y, SHEET]; }

		// Run each section in isolation: if one breaks, the others still load.
		function safe(label, f)
		{
			try { f(); }
			catch (e) { console.warn('[Tribal Alchemy] section "' + label + '" failed:', e); }
		}

		// Use a wanted category if the game knows it, otherwise fall back.
		function pickCategory(list, wanted, fallback)
		{
			try
			{
				if (list)
				{
					if (Array.isArray(list))
					{
						for (var i = 0; i < list.length; i++)
							if (list[i] === wanted || (list[i] && list[i].id === wanted)) return wanted;
					}
					else if (list[wanted] !== undefined) return wanted;
				}
			} catch (e) { }
			return fallback;
		}

		var resCat = pickCategory(G.resCategories, 'misc', 'misc');
		var unitCrafting = pickCategory(G.unitCategories, 'crafting', 'production');

		/*==========================  CONTEXT  ==========================*/
		safe('context', function ()
		{
			if (G.contextNames) G.contextNames['prospect'] = 'Prospecting';
		});

		/*=========================  RESOURCES  =========================*/
		safe('resources', function ()
		{
			new G.Res({
				name: 'amber',
				desc: 'Fossilized tree resin that glows warm in firelight. Rare, beautiful and quietly sacred.<>Sometimes a tiny insect sleeps inside.',
				icon: ico(0, 0), category: resCat, hidden: true
			});
			new G.Res({
				name: 'glowing crystal',
				displayName: 'Glowing crystal',
				desc: 'A shard of pale stone that gives off a soft cold light in the dark. Nobody knows why.',
				icon: ico(1, 0), category: resCat, hidden: true
			});
			new G.Res({
				name: 'charm',
				desc: 'A polished piece of [amber] worn on a cord. The people believe it keeps misfortune away.',
				icon: ico(2, 0), category: resCat, hidden: true
			});
			new G.Res({
				name: 'lantern',
				desc: 'A [glowing crystal] caged in sticks and hide. Every lantern gently brightens the minds of your people at night (+[insight]), but they slowly wear out.',
				icon: ico(3, 0), category: resCat, hidden: true
			});
			// War bookkeeping. They live in resources so they are saved with the game.
			new G.Res({
				name: 'war front',
				displayName: 'Front line',
				desc: 'How the war against the rival tribe is going, from 0 to 100. Reach 100 and the rival is forced to pay tribute; fall to 0 and your people are routed.',
				icon: ico(9, 0), category: resCat, hidden: true, fractional: true
			});
			new G.Res({
				name: 'war truce',
				desc: 'Days left before the rival tribe is willing to fight again.',
				icon: ico(9, 0), category: resCat, hidden: true, fractional: true
			});
			new G.Res({
				name: 'war victories',
				desc: 'Wars won against rival tribes. Each victory makes the next rival stronger.',
				icon: ico(8, 0), category: resCat, hidden: true, fractional: true
			});
		});

		/*===========================  GOODS  ===========================*/
		safe('goods', function ()
		{
			new G.Goods({
				name: 'amber seam',
				desc: 'Veins of [amber] hidden in the soil and in old tree roots.',
				icon: ico(0, 0),
				res: { 'prospect': { 'amber': 1 } },
				mult: 3
			});
			new G.Goods({
				name: 'crystal vein',
				desc: 'Veins of [glowing crystal] that peek out of the rock.',
				icon: ico(1, 0),
				res: { 'prospect': { 'glowing crystal': 1 } },
				mult: 2
			});

			// Scatter the new goods across every land that is not ocean.
			var amberChance = { 'forest': 0.5, 'jungle': 0.5, 'shrubland': 0.3 };
			var crystalChance = { 'desert': 0.4, 'tundra': 0.35, 'arctic': 0.35, 'savanna': 0.2 };
			function hasGood(land, name)
			{
				for (var i = 0; i < land.goods.length; i++)
				{
					var t = land.goods[i].type;
					if (t === name || (Array.isArray(t) && t.indexOf(name) != -1)) return true;
				}
				return false;
			}
			for (var i in G.land)
			{
				var land = G.land[i];
				if (!land || land.ocean || !Array.isArray(land.goods)) continue;
				if (!hasGood(land, 'amber seam'))
					land.goods.push({ type: 'amber seam', chance: amberChance[land.name] || 0.2, min: 0.1, max: 0.4 });
				if (!hasGood(land, 'crystal vein'))
					land.goods.push({ type: 'crystal vein', chance: crystalChance[land.name] || 0.12, min: 0.1, max: 0.35 });
			}
		});

		/*============================  TECHS  ===========================*/
		safe('techs', function ()
		{
			new G.Tech({
				name: 'prospecting lore',
				displayName: 'Prospecting lore',
				desc: '@unlocks [prospector]s, who search the land for [amber] and [glowing crystal]<>Your people notice that the ground sometimes shines where the rain has washed it.',
				icon: ico(4, 0),
				cost: { 'insight': 30 },
				req: { 'tribalism': true },
				effects: [
					{ type: 'show context', what: ['prospect'] },
					{ type: 'show res', what: ['amber', 'glowing crystal'] }
				],
				chance: 2
			});
			new G.Tech({
				name: 'charm crafting',
				displayName: 'Charm crafting',
				desc: '@unlocks [charmsmith]s, who turn [amber] into [charm]s<>A bead, a cord, a wish.',
				icon: ico(5, 0),
				cost: { 'insight': 60 },
				req: { 'prospecting lore': true },
				effects: [
					{ type: 'show res', what: ['charm'] }
				]
			});
			new G.Tech({
				name: 'crystal lanterns',
				displayName: 'Crystal lanterns',
				desc: '@[charmsmith]s can now craft [lantern]s from [glowing crystal]<>@each [lantern] you own generates a little [insight] every night<>The night is no longer quite so dark.',
				icon: ico(3, 0),
				cost: { 'insight': 90 },
				req: { 'charm crafting': true },
				effects: [
					{ type: 'show res', what: ['lantern'] }
				]
			});
			new G.Tech({
				name: 'amber veneration',
				displayName: 'Amber veneration',
				desc: '@unlocks [amber shrine]s, which burn [amber] as offerings to produce [culture] and [faith]@unlocks the [amber offering] policy<>What was resin is now sacred.',
				icon: ico(6, 0),
				cost: { 'insight': 80, 'culture': 20 },
				req: { 'charm crafting': true },
				effects: []
			});
			new G.Tech({
				name: 'war banners',
				displayName: 'War banners',
				desc: '@unlocks [warrior]s@unlocks the [rival relations] policy, letting you raid or go to war against a rival tribe<>A strip of red hide on a pole. Enough to make people march together, and to make them march against someone.',
				icon: ico(9, 0),
				cost: { 'insight': 100, 'culture': 30 },
				req: { 'charm crafting': true },
				effects: []
			});
			new G.Tech({
				name: 'warrior charms',
				displayName: 'Warrior charms',
				desc: '@each [charm] carried by a [warrior] now adds a full extra warrior\'s worth of strength in battle, instead of half<>They say the amber remembers every blow it turned away.',
				icon: ico(2, 0),
				cost: { 'insight': 120, 'culture': 40 },
				req: { 'war banners': true },
				effects: []
			});
		});

		/*============================  UNITS  ===========================*/
		safe('units', function ()
		{
			new G.Unit({
				name: 'prospector',
				desc: '@searches the land for [amber] and [glowing crystal]<>Prospectors read the earth like others read faces. Most of the time it says nothing.',
				icon: ico(4, 0),
				cost: {},
				use: { 'worker': 1 },
				effects: [
					{ type: 'gather', context: 'prospect', amount: 0.15, max: 0.4 }
				],
				req: { 'prospecting lore': true },
				category: 'production'
			});

			new G.Unit({
				name: 'charmsmith',
				desc: '@turns [amber] into [charm]s@can also craft [lantern]s once [crystal lanterns] is known<>The charmsmith hums while working; some say that is the real magic.',
				icon: ico(5, 0),
				cost: {},
				modes: {
					'off': G.MODE_OFF,
					'charms': {
						name: 'Craft charms',
						icon: ico(2, 0),
						desc: 'Turn 1 [amber] and 1 [stick] into 1 [charm].',
						use: { 'worker': 1 }
					},
					'lanterns': {
						name: 'Craft lanterns',
						icon: ico(3, 0),
						desc: 'Turn 1 [glowing crystal] and 2 [stick]s into 1 [lantern].',
						req: { 'crystal lanterns': true },
						use: { 'worker': 1 }
					}
				},
				effects: [
					{ type: 'convert', from: { 'amber': 1, 'stick': 1 }, into: { 'charm': 1 }, every: 4, mode: 'charms' },
					{ type: 'convert', from: { 'glowing crystal': 1, 'stick': 2 }, into: { 'lantern': 1 }, every: 5, mode: 'lanterns' }
				],
				gizmos: true,
				req: { 'charm crafting': true },
				category: unitCrafting
			});

			new G.Unit({
				name: 'amber shrine',
				desc: '@every day, may burn some of your [amber] as an offering, producing [culture] and [faith]@works twice as well while the [amber offering] policy is on<>A small stone hut with a single bright eye of resin on top.',
				icon: ico(6, 0),
				cost: { 'archaic building materials': 60, 'amber': 3 },
				use: { 'land': 1 },
				effects: [],
				req: { 'amber veneration': true },
				category: pickCategory(G.unitCategories, 'cultural', 'production')
			});
		});

		safe('warrior', function ()
		{
			var effects = [];
			// Battle wounds reuse the game's own "wounded" mechanic (same one quarries use).
			if (typeof unitGetsConverted === 'function')
			{
				effects.push({
					type: 'function',
					func: unitGetsConverted({ 'wounded': 1 }, 0.01, 0.04, true, '[X] [people].', 'warrior was wounded in a skirmish', 'warriors were wounded in skirmishes'),
					chance: 1 / 14, req: { 'rival relations': 'skirmish' }
				});
				effects.push({
					type: 'function',
					func: unitGetsConverted({ 'wounded': 1 }, 0.02, 0.08, true, '[X] [people].', 'warrior was wounded in battle', 'warriors were wounded in battle'),
					chance: 1 / 5, req: { 'rival relations': 'war' }
				});
			}
			else console.warn('[Tribal Alchemy] unitGetsConverted not found: warriors will not be wounded in battle.');

			new G.Unit({
				name: 'warrior',
				desc: '@fights for you when the [rival relations] policy is set to skirmishes or war@each [warrior] carrying a [charm] fights harder@get wounded in battle<>The first people to learn that a stick can also be a spear.',
				icon: ico(8, 0),
				cost: {},
				use: { 'worker': 1, 'stone tools': 1 },
				effects: effects,
				req: { 'war banners': true },
				category: 'production'
			});
		});

		/*===========================  POLICY  ===========================*/
		safe('policy', function ()
		{
			new G.Policy({
				name: 'amber offering',
				desc: 'Decides how generously your [amber shrine]s burn [amber]. A bigger offering means more [culture] and [faith], but you will run through your amber faster.',
				icon: ico(7, 0),
				startMode: 'off',
				req: { 'amber veneration': true },
				modes: {
					'off': G.MODE_OFF,
					'on': { name: 'Generous offerings', desc: 'Shrines burn 2.5x more [amber] and produce twice as much [faith].' }
				},
				category: 'faith'
			});
			new G.Policy({
				name: 'rival relations',
				desc: 'How you deal with the rival tribe beyond your borders. At peace nothing happens. Skirmishes are cheap raids for loot. Total war is a long campaign on the [war front] that can end in tribute... or in a rout. [warrior]s do the fighting.',
				icon: ico(9, 0),
				startMode: 'off',
				req: { 'war banners': true },
				modes: {
					'off': G.MODE_OFF,
					'skirmish': { name: 'Border skirmishes', desc: 'Small raids now and then to steal [amber] and [charm]s. Low risk, but [warrior]s still get wounded from time to time.' },
					'war': { name: 'Total war', desc: 'Start a campaign on the [war front]. Win and the rival pays heavy tribute; lose and you pay the price. Casualties are much higher. Ending the war while losing costs you tribute.' }
				},
				category: pickCategory(G.policyCategories, 'political', 'faith')
			});
		});

		/*======================  DAILY MECHANICS  =======================*/
		function resObj(name)
		{
			try { return G.getRes(name); } catch (e) { return null; }
		}
		function amount(name)
		{
			var r = resObj(name);
			return r ? r.amount : 0;
		}
		function gain(name, n, ctx)
		{
			if (n > 0 && resObj(name)) G.gain(name, n, ctx);
		}
		function lose(name, n, ctx)
		{
			if (n > 0 && resObj(name)) G.lose(name, n, ctx);
		}
		function ownedUnit(name)
		{
			var i = G.unitsOwnedNames.indexOf(name);
			return i >= 0 ? G.unitsOwned[i] : null;
		}

		/*--------------------------  WAR  --------------------------*/
		var RIVALS = ['the Ashen Clan', 'the River Folk', 'the Stone Walkers', 'the Moon Hunters', 'the Red Reed Tribe'];
		function rivalName() { return RIVALS[Math.floor(amount('war victories')) % RIVALS.length]; }
		function policyIs(mode)
		{
			try { return G.checkReq({ 'rival relations': mode }); } catch (e) { return false; }
		}
		function makePeace()
		{
			try { G.setPolicyModeByName('rival relations', 'off'); } catch (e) { }
		}
		function setAmount(name, v)
		{
			var cur = amount(name);
			if (v > cur) gain(name, v - cur, 'war'); else lose(name, cur - v, 'war');
		}
		function myStrength()
		{
			var w = ownedUnit('warrior');
			var n = w ? w.amount : 0;
			if (n <= 0) return 0;
			var perCharm = G.has('warrior charms') ? 1 : 0.5;
			return n + Math.min(amount('charm'), n) * perCharm;
		}
		function rivalStrength()
		{
			return 13 + amount('war victories') * 6 + (Math.random() * 6 - 3);
		}
		function endCampaign(truceDays)
		{
			setAmount('war front', 0);
			setAmount('war truce', truceDays);
			makePeace();
		}

		function warDay()
		{
			if (!G.has('war banners') || !resObj('war front')) return;

			if (amount('war truce') > 0) lose('war truce', 1, 'time');
			var front = amount('war front');
			var S = myStrength();
			var rival = rivalName();

			// --- Total war: tug-of-war on the front line ---
			if (policyIs('war'))
			{
				if (front <= 0)
				{
					if (amount('war truce') > 0)
					{
						if (G.tick % 30 === 0)
							G.Message({ type: 'important', text: 'There is still a truce with <b>' + rival + '</b>. Your people cannot fight them for ' + Math.ceil(amount('war truce')) + ' more days.', icon: ico(9, 0) });
						return;
					}
					setAmount('war front', 50);
					G.Message({ type: 'important', text: '<b>War!</b> Your people march against <b>' + rival + '</b>. The front line is balanced: reach 100 to force them to pay tribute, but fall to 0 and you will be routed.', icon: ico(9, 0) });
					return;
				}

				var R = rivalStrength();
				var delta = (S > 0) ? ((S - R) / (S + R + 1)) * 6 + (Math.random() * 4 - 2) : -4;
				if (delta >= 0) gain('war front', delta, 'battle');
				else lose('war front', Math.min(front, -delta), 'battle');   // never below 0
				front = amount('war front');

				if (G.tick % 20 === 0 && front > 0 && front < 100)
					G.Message({ type: 'important', text: 'The war against <b>' + rival + '</b> rages on. The front line stands at <b>' + Math.round(front) + '</b>/100.', icon: ico(9, 0) });

				if (front >= 100)
				{
					var wins = Math.floor(amount('war victories'));
					var amberLoot = 10 + Math.floor(Math.random() * 11) + wins * 3;
					gain('amber', amberLoot, 'war tribute');
					gain('glowing crystal', 3 + Math.floor(Math.random() * 4), 'war tribute');
					gain('charm', 2 + Math.floor(Math.random() * 3), 'war tribute');
					gain('culture', 50 + wins * 20, 'war glory');
					gain('influence', 10 + wins * 5, 'war glory');
					gain('insight', 40, 'war lessons');
					gain('war victories', 1, 'war');
					endCampaign(150);
					G.Message({ type: 'good', text: '<b>Victory!</b> <b>' + rival + '</b> have been forced to sue for peace and pay tribute: <b>' + amberLoot + '</b> [amber], crystals, [charm]s and a tale of glory. But the next rivals will be stronger.', icon: ico(8, 0) });
				}
				else if (front <= 0)
				{
					lose('amber', Math.floor(amount('amber') * 0.4), 'war reparations');
					lose('charm', Math.floor(amount('charm') * 0.3), 'war reparations');
					lose('culture', Math.floor(amount('culture') * 0.3), 'war reparations');
					endCampaign(100);
					G.Message({ type: 'bad', text: '<b>Defeat.</b> Your people were routed by <b>' + rival + '</b> and had to hand over a good part of their [amber], [charm]s and [culture] to be left alone.', icon: ico(9, 0) });
				}
				return;
			}

			// --- Ceasefire in the middle of a campaign ---
			if (front > 0)
			{
				if (front < 40)
				{
					lose('amber', Math.floor(amount('amber') * 0.25), 'tribute for peace');
					lose('charm', Math.floor(amount('charm') * 0.25), 'tribute for peace');
					G.Message({ type: 'bad', text: 'You ended the war while losing. <b>' + rival + '</b> demanded tribute in [amber] and [charm]s before agreeing to a ceasefire.', icon: ico(9, 0) });
				}
				else G.Message({ type: 'important', text: 'The war against <b>' + rival + '</b> ends in a ceasefire.', icon: ico(9, 0) });
				endCampaign(60);
				return;
			}

			// --- Border skirmishes: occasional raids for loot ---
			if (policyIs('skirmish') && S > 0 && Math.random() < 1 / 12)
			{
				var R2 = rivalStrength();
				if (Math.random() < S / (S + R2 + 1) * 1.2)
				{
					var a = 1 + Math.floor(Math.random() * 3);
					gain('amber', a, 'raid loot');
					var extra = '';
					if (Math.random() < 0.3) { gain('charm', 1, 'raid loot'); extra = ' and a [charm]'; }
					G.Message({ type: 'good', text: 'A raiding party hit a camp of <b>' + rival + '</b> and came back with <b>' + a + '</b> [amber]' + extra + '.', icon: ico(8, 0) });
				}
				else G.Message({ type: 'bad', text: 'A raiding party was driven back by <b>' + rival + '</b>. They left empty-handed.', icon: ico(8, 0) });
			}
		}

		function alchemyDay()
		{
			// Resources start hidden: make sure they show up as soon as you own some.
			var mine = ['amber', 'glowing crystal', 'charm', 'lantern', 'war front'];
			for (var i = 0; i < mine.length; i++)
			{
				var r = resObj(mine[i]);
				if (r && r.hidden && r.amount > 0) r.hidden = false;
			}

			// 1) Lanterns light the nights, then wear out a little.
			var lanterns = amount('lantern');
			if (lanterns > 0)
			{
				gain('insight', lanterns * 0.03, 'lantern light');
				lose('lantern', Math.min(lanterns, randomFloor(lanterns * 0.008)), 'wear and tear');
			}

			// 2) Shrines burn amber for culture and faith.
			var shrine = ownedUnit('amber shrine');
			if (shrine && shrine.amount > 0)
			{
				var generous = false;
				try { generous = G.checkReq({ 'amber offering': 'on' }); } catch (e) { }
				var burn = randomFloor(shrine.amount * (generous ? 0.1 : 0.04));
				burn = Math.min(burn, amount('amber'));
				if (burn > 0)
				{
					lose('amber', burn, 'shrine offerings');
					gain('culture', burn * 5, 'shrine offerings');
					gain('faith', burn * (generous ? 2 : 1), 'shrine offerings');
				}
			}

			// 3) War against the rival tribe.
			try { warDay(); }
			catch (e) { console.warn('[Tribal Alchemy] war update failed:', e); }

			// 4) A rare event once prospecting is known.
			if (G.has('prospecting lore') && Math.random() < 1 / 150)
			{
				var a = 3 + Math.floor(Math.random() * 6);
				gain('amber', a, 'Glimmering Night');
				var text = 'A <b>Glimmering Night</b>: the ground shone under the moon and your people returned with <b>' + a + '</b> pieces of [amber].';
				if (G.has('crystal lanterns'))
				{
					var c = 1 + Math.floor(Math.random() * 3);
					gain('glowing crystal', c, 'Glimmering Night');
					text += ' They also brought back <b>' + c + '</b> [glowing crystal]s.';
				}
				G.Message({ type: 'good', text: text, icon: ico(0, 0) });
			}
		}

		// Hook into the game's daily update without replacing it (stays compatible with other mods).
		if (G.funcs && typeof G.funcs['new day'] === 'function' && !G.funcs['new day'].__tribalAlchemy)
		{
			var originalNewDay = G.funcs['new day'];
			var hooked = function ()
			{
				originalNewDay.apply(this, arguments);
				try { alchemyDay(); }
				catch (e) { console.warn('[Tribal Alchemy] daily update failed:', e); }
			};
			hooked.__tribalAlchemy = true;
			G.funcs['new day'] = hooked;
		}
	}
});
