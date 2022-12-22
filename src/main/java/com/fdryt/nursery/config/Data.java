package com.fdryt.nursery.config;

import com.fdryt.nursery.domain.*;
import com.fdryt.nursery.repository.ClassificationRepository;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Set;

import static com.fdryt.nursery.domain.ClassificationByUtility.*;
import static com.fdryt.nursery.domain.Status.*;

@Configuration
public class Data {

    @Bean
    CommandLineRunner commandLineRunner(ClassificationRepository classificationRepository, OrnamentalPlantRepository ornamentalPlantRepository/*, FamilyRepository familyRepository, IdentificationRepository identificationRepository*/) {
        return args -> {
            Classification cactu = new Classification(CACTU);
            Classification crasa = new Classification(CRASA);
            Classification exotica = new Classification(EXOTICA);
            Classification frutal = new Classification(FRUTAL);
            Classification forestal = new Classification(FORESTAL);
            Classification alimenticia = new Classification(ALIMENTICIA);
            Classification industrial = new Classification(INDUSTRIAL);
            Classification medicinal = new Classification(MEDICINAL);
            Classification ornamental = new Classification(ORNAMENTAL);
            Classification suculenta = new Classification(SUCULENTA);

            classificationRepository.saveAll(List.of(cactu, crasa, exotica, frutal, forestal, alimenticia, industrial, medicinal, ornamental, suculenta));

            Family euphorbiaceae = new Family("euphorbiaceae");
            Family fabaceae = new Family("fabaceae");
            Family asparagaceae = new Family("asparagaceae");
            Family solanaceae = new Family("solanaceae");
            Family lamiaceae = new Family("lamiaceae");
            Family salicaceae = new Family("salicaceae");
            Family asphodelaceae = new Family("asphodelaceae");
            Family amaryllidaceae = new Family("amaryllidaceae");
            Family commelinaceae = new Family("commelinaceae");
            Family araceae = new Family("araceae");
            Family ruscaceae = new Family("ruscaceae");
            Family begoniaceae = new Family("begoniaceae");
            Family verbenaceae = new Family("verbenaceae");
            Family apocynaceae = new Family("apocynaceae");
            Family malvaceae = new Family("malvaceae");
            Family bromeliaceae = new Family("bromeliaceae");
            Family nyctaginaceae = new Family("nyctaginaceae");
            Family cactaceae = new Family("cactaceae");
            Family rubiaceae = new Family("rubiaceae");
            Family marantaceae = new Family("marantaceae");
            Family sapindaceae = new Family("sapindaceae");
            Family araliaceae = new Family("araliaceae");
            Family annonaceae = new Family("annonaceae");
            Family rutaceae = new Family("rutaceae");
            Family vitaceae = new Family("vitaceae");
            Family polypodiaceae = new Family("polypodiaceae");
            Family crassulaceae = new Family("crassulaceae");

            /*Family rosaceae = new Family("rosaceae");
            Family myrtaceae = new Family("myrtaceae");
            Family moraceae = new Family("moraceae");
            Family oleaceae = new Family("oleaceae");
            Family onagraceae = new Family("onagraceae");
            Family gesneriaceae = new Family("gesneriaceae");
            Family xanthorrhoeaceae = new Family("xanthorrhoeaceae");
            Family aspleniaceae = new Family("aspleniaceae");
            Family davalliceae = new Family("davalliceae");
            Family amaranthaceae = new Family("amaranthaceae");
            Family bignoniaceae = new Family("bignoniaceae");
            Family agavaceae = new Family("agavaceae");
            Family pasifloraceae = new Family("pasifloraceae");
            Family anacardiaceae = new Family("anacardiaceae");
            Family phytokaccaceae = new Family("phytokaccaceae");
            Family portulacaceae = new Family("portulacaceae");
            Family lauraceae = new Family("lauraceae");
            Family caricaceae = new Family("caricaceae");
            Family cyperaceae = new Family("cyperaceae");
            Family geraniaceae = new Family("geraniaceae");
            Family cupressaceae = new Family("cupressaceae");
            Family pinaceae = new Family("pinaceae");
            Family urticaceae = new Family("urticaceae");
            Family asteraceae = new Family("asteraceae");
            Family saxifragaceae = new Family("saxifragaceae");
            Family mimosaceae = new Family("mimosaceae");
            Family balsaminaceae = new Family("balsaminaceae");
            Family passifloraceae = new Family("passifloraceae");
            Family acanthaceae = new Family("acanthaceae");*/

            Identification florDeNavidad = new Identification("flor de navidad", "euphorbia pulcherrima", null, euphorbiaceae);
            florDeNavidad.addClassification(ornamental);
            Identification acaciaOrrida = new Identification("acacia orrida", "acacia orrida", null, fabaceae);
            acaciaOrrida.addClassification(forestal);
            Identification agave = new Identification("agave", "agave tequilero", null, asparagaceae);
            agave.addClassification(industrial);
            Identification ajiOrnamental = new Identification("aji ornamental", "capsicum annuum", 'l', solanaceae);
            ajiOrnamental.addClassification(alimenticia);
            Identification ajuga = new Identification("ajuga", "ajuga reptans", null, lamiaceae);
            ajuga.addClassification(ornamental);
            Identification alamo = new Identification("alamo", "populus x canadensis moench", null, salicaceae);
            alamo.addClassification(forestal);
            Identification aloe = new Identification("aloe", "aloe barbadensis var. chinensis", null, asphodelaceae);
            aloe.addClassification(medicinal);
            Identification amarilis = new Identification("amarilis", "hippeastrum spp", null, amaryllidaceae);
            amarilis.addClassification(ornamental);
            Identification amorDeHombre = new Identification("amor de hombre", "trasdecantia pallida", null, commelinaceae);
            amorDeHombre.addClassification(ornamental);
            Identification anturio = new Identification("anturio", "anthurium andreanum", null, araceae);
            anturio.addClassification(ornamental);
            Identification anturioGigante = new Identification("anturio gigante", "anthurium andreanum", null, araceae);
            anturioGigante.addClassification(ornamental);
            Identification aspidrasta = new Identification("aspidrasta", "aspidiastra elatior", null, ruscaceae);
            aspidrasta.addClassification(ornamental);
            Identification begoniaCebra = new Identification("begonia cebra", null, null, null);
            begoniaCebra.addClassification(ornamental);
            Identification begoniaRex = new Identification("begonia rex", "begonia rex", null, begoniaceae);
            begoniaRex.addClassification(ornamental);
            Identification begoniaTuberosa = new Identification("begonias tuberosa", "begonia x tuberhybrida", null, begoniaceae);
            begoniaTuberosa.addClassification(ornamental);
            Identification bingoDeOro = new Identification("bingo de oro", "duranta erecta", null, verbenaceae);
            bingoDeOro.addClassification(ornamental);
            Identification bouquetDeNovia = new Identification("bouquet de novia", "plumeria rubra", 'l', apocynaceae);
            bouquetDeNovia.addClassification(ornamental);
            Identification brachichito = new Identification("brachichito", "brachychiton populneus", null, malvaceae);
            brachichito.addClassification(forestal);
            Identification bromelia = new Identification("bromelia", "bromelia adams", null, bromeliaceae);
            bromelia.addClassification(exotica);
            Identification buganvilla = new Identification("buganvilla", "boungainvillea spectabilis willd", null, nyctaginaceae);
            buganvilla.addClassification(ornamental);
            Identification cactuSanPedro = new Identification("cactu san pedro", "echinopsis pachanoi", null, cactaceae);
            cactuSanPedro.addClassifications(Set.of(cactu, ornamental));
            Identification cactuColaDeRata = new Identification("cactu cola de rata", null, null, cactaceae);
            cactuColaDeRata.addClassifications(Set.of(cactu, ornamental));
            Identification cactuEstrellaDeMar = new Identification("cactu estrella de mar", null, null, cactaceae);
            cactuEstrellaDeMar.addClassifications(Set.of(cactu, ornamental));
            Identification cactuFlorDeMayo = new Identification("cactu flor de mayo", "schlumbergera truncata", null, cactaceae);
            cactuFlorDeMayo.addClassifications(Set.of(cactu, ornamental));
            Identification cactuLeopardo = new Identification("cactu leopardo", null, null, null);
            cactuLeopardo.addClassifications(Set.of(cactu, ornamental));
            Identification cactuMamilaria = new Identification("cactu mamilaria", "mammillaria spinosissima", null, cactaceae);
            cactuMamilaria.addClassifications(Set.of(cactu, ornamental));
            Identification cactuNopal = new Identification("cactu nopal", "Opuntia ficus indica", null, cactaceae);
            cactuNopal.addClassifications(Set.of(cactu, ornamental));
            Identification cactuSerrucho = new Identification("cactu serrucho", null, null, null);
            cactuSerrucho.addClassifications(Set.of(cactu, ornamental));
            Identification cactuVariados = new Identification("cactu variados", null, null, null);
            cactuVariados.addClassifications(Set.of(cactu, ornamental));

            Identification cafe = new Identification("cafe", "coffea arabica", null, rubiaceae);
            cafe.addClassification(alimenticia);
            Identification cala = new Identification("cala", null, null, null);
            cala.addClassification(ornamental);
            Identification calateaLarga = new Identification("calatea larga", "ctenanthe amabilis", null, marantaceae);
            calateaLarga.addClassification(ornamental);
            Identification calateaZebrina = new Identification("calatea zebrina", "calathea zebrina", null, marantaceae);
            calateaZebrina.addClassification(ornamental);
            Identification canelaAspisdrasta = new Identification("canela aspisdrasta", null, null, null);
            canelaAspisdrasta.addClassification(ornamental);
            Identification cebollin = new Identification("cebollin", null, null, null);
            cebollin.addClassification(ornamental);
            Identification chacatea = new Identification("chacatea", "dodonaea viscosa", null, sapindaceae);
            chacatea.addClassification(ornamental);
            Identification cheflera = new Identification("cheflera", "schefflera arboricola", null, araliaceae);
            cheflera.addClassification(forestal);
            Identification chilijchiCeibo = new Identification("chilijchi ceibo", "erythrina falcata", null, fabaceae);
            chilijchiCeibo.addClassification(ornamental);
            Identification chirimoya = new Identification("chirimoya", "annona cherimola mill", null, annonaceae);
            chirimoya.addClassification(forestal);
            Identification cidra = new Identification("cidra", "citrus medica", null, rutaceae);
            cidra.addClassification(frutal);
            Identification cissus = new Identification("cissus", "cissus alata", null, vitaceae);
            cissus.addClassification(frutal);
            Identification crasasPunteagudas = new Identification("crasas punteagudas", null, null, null);
            crasasPunteagudas.addClassification(ornamental);
            Identification cucarda = new Identification("cucarda", "hibiscus rosasinensis", null, malvaceae);
            cucarda.addClassification(ornamental);
            Identification cuernoDeAlce = new Identification("cuerno de alce", "platycerium bifurcatum", null, polypodiaceae);
            cuernoDeAlce.addClassification(exotica);
            Identification cupido = new Identification("cupido", null, null, null);
            cupido.addClassification(ornamental);
            Identification deditosDeNino = new Identification("deditos de nino", "sedum pachyphylum", null, crassulaceae);
            deditosDeNino.addClassifications(Set.of(ornamental, crasa));
            Identification diamela = new Identification("diamela", null, null, null);
            diamela.addClassification(ornamental);
            Identification dolar = new Identification("dolar", "plectranthus nummularius", 'b', lamiaceae);
            dolar.addClassification(ornamental);
            Identification dracaenaNativa = new Identification("dracaena nativa", "dracaena fragans", null, asparagaceae);
            dracaenaNativa.addClassification(ornamental);
            Identification dracena = new Identification("dracena", null, null, null);
            dracena.addClassification(ornamental);

            OrnamentalPlant florDeNavidadPlant = new OrnamentalPlant(AVAILABLE, florDeNavidad);
            florDeNavidadPlant.addPicture("https://url_image_o0_1");
            florDeNavidadPlant.addPicture("https://url_image_o0_2");

            OrnamentalPlant acaciaOrridaPlant = new OrnamentalPlant(AVAILABLE, acaciaOrrida);
            acaciaOrridaPlant.addPicture("https://url_image_o1_1");
            acaciaOrridaPlant.addPicture("https://url_image_o1_2");

            OrnamentalPlant agavePlant = new OrnamentalPlant(IN_CONSERVATION, agave);
            agavePlant.addPicture("https://url_image_o2_1");
            agavePlant.addPicture("https://url_image_o2_2");

            OrnamentalPlant ajiOrnamentalPlant = new OrnamentalPlant(AVAILABLE, ajiOrnamental);
            ajiOrnamentalPlant.addPicture("https://url_image_o3_1");
            ajiOrnamentalPlant.addPicture("https://url_image_o3_2");

            OrnamentalPlant ajugaPlant = new OrnamentalPlant(NON_EXISTENT, ajuga);
            ajugaPlant.addPicture("https://url_image_o4_1");
            ajugaPlant.addPicture("https://url_image_o4_2");

            OrnamentalPlant alamoPlant = new OrnamentalPlant(AVAILABLE, alamo);
            alamoPlant.addPicture("https://url_image_o5_1");
            alamoPlant.addPicture("https://url_image_o5_2");

            OrnamentalPlant aloePlant = new OrnamentalPlant(IN_CONSERVATION, aloe);
            aloePlant.addPicture("https://url_image_o6_1");
            aloePlant.addPicture("https://url_image_o6_2");

            OrnamentalPlant amarilisPlant = new OrnamentalPlant(NON_EXISTENT, amarilis);
            amarilisPlant.addPicture("https://url_image_o7_1");
            amarilisPlant.addPicture("https://url_image_o7_2");

            OrnamentalPlant amorDeHombrePlant = new OrnamentalPlant(AVAILABLE, amorDeHombre);
            amorDeHombrePlant.addPicture("https://url_image_o8_1");

            OrnamentalPlant anturioPlant = new OrnamentalPlant(IN_CONSERVATION, anturio);
            anturioPlant.addPicture("https://url_image_o9_1");
            anturioPlant.addPicture("https://url_image_o9_2");

            OrnamentalPlant anturioGigantePlant = new OrnamentalPlant(AVAILABLE, anturioGigante);
            anturioGigantePlant.addPicture("https://url_image_o10_1");
            anturioGigantePlant.addPicture("https://url_image_o10_2");

            OrnamentalPlant aspidrastaPlant = new OrnamentalPlant(AVAILABLE, aspidrasta);
            aspidrastaPlant.addPicture("https://url_image_o11_1");
            aspidrastaPlant.addPicture("https://url_image_o11_2");

            OrnamentalPlant begoniaCebraPlant = new OrnamentalPlant(AVAILABLE, begoniaCebra);
            begoniaCebraPlant.addPicture("https://url_image_o12_1");
            begoniaCebraPlant.addPicture("https://url_image_o12_2");

            OrnamentalPlant begoniaRexPlant = new OrnamentalPlant(NON_EXISTENT, begoniaRex);
            begoniaRexPlant.addPicture("https://url_image_o13_1");
            begoniaRexPlant.addPicture("https://url_image_o13_2");

            OrnamentalPlant begoniaTuberosaPlant = new OrnamentalPlant(IN_CONSERVATION, begoniaTuberosa);
            begoniaTuberosaPlant.addPicture("https://url_image_o14_1");
            begoniaTuberosaPlant.addPicture("https://url_image_o14_2");

            OrnamentalPlant bingoDeOroPlant = new OrnamentalPlant(AVAILABLE, bingoDeOro);
            bingoDeOroPlant.addPicture("https://url_image_o15_1");
            bingoDeOroPlant.addPicture("https://url_image_o15_2");
            bingoDeOroPlant.addPicture("https://url_image_o15_3");

            OrnamentalPlant bouquetDeNoviaPlant = new OrnamentalPlant(AVAILABLE, bouquetDeNovia);
            bouquetDeNoviaPlant.addPicture("https://url_image_o16_1");
            bouquetDeNoviaPlant.addPicture("https://url_image_o16_2");
            bouquetDeNoviaPlant.addPicture("https://url_image_o16_3");

            OrnamentalPlant brachichitoPlant = new OrnamentalPlant(NON_EXISTENT, brachichito);
            brachichitoPlant.addPicture("https://url_image_o17_1");
            brachichitoPlant.addPicture("https://url_image_o17_2");
            brachichitoPlant.addPicture("https://url_image_o17_3");

            OrnamentalPlant bromeliaPlant = new OrnamentalPlant(IN_CONSERVATION, bromelia);
            bromeliaPlant.addPicture("https://url_image_o18_1");
            bromeliaPlant.addPicture("https://url_image_o18_2");

            OrnamentalPlant buganvillaPlant = new OrnamentalPlant(AVAILABLE, buganvilla);
            buganvillaPlant.addPicture("https://url_image_o19_1");
            buganvillaPlant.addPicture("https://url_image_o19_2");
            buganvillaPlant.addPicture("https://url_image_o19_3");

            OrnamentalPlant cactuSanPedroPlant = new OrnamentalPlant(AVAILABLE, cactuSanPedro);
            cactuSanPedroPlant.addPicture("https://url_image_o20_1");
            cactuSanPedroPlant.addPicture("https://url_image_o20_2");
            cactuSanPedroPlant.addPicture("https://url_image_o20_3");

            OrnamentalPlant cactuColaDeRataPlant = new OrnamentalPlant(AVAILABLE, cactuColaDeRata);
            cactuColaDeRataPlant.addPicture("https://url_image_o21_1");
            cactuColaDeRataPlant.addPicture("https://url_image_o21_2");

            OrnamentalPlant cactuEstrellaDeMarPlant = new OrnamentalPlant(AVAILABLE, cactuEstrellaDeMar);
            cactuEstrellaDeMarPlant.addPicture("https://url_image_o22_1");
            cactuEstrellaDeMarPlant.addPicture("https://url_image_o22_2");

            OrnamentalPlant cactuFlorDeMayoPlant = new OrnamentalPlant(NON_EXISTENT, cactuFlorDeMayo);
            cactuFlorDeMayoPlant.addPicture("https://url_image_o23_1");
            cactuFlorDeMayoPlant.addPicture("https://url_image_o23_2");

            OrnamentalPlant cactuLeopardoPlant = new OrnamentalPlant(AVAILABLE, cactuLeopardo);
            cactuLeopardoPlant.addPicture("https://url_image_o24_1");
            cactuLeopardoPlant.addPicture("https://url_image_o24_2");

            OrnamentalPlant cactuMamilariaPlant = new OrnamentalPlant(AVAILABLE, cactuMamilaria);
            cactuMamilariaPlant.addPicture("https://url_image_o25_1");
            cactuMamilariaPlant.addPicture("https://url_image_o25_2");

            OrnamentalPlant cactuNopalPlant = new OrnamentalPlant(AVAILABLE, cactuNopal);
            cactuNopalPlant.addPicture("https://url_image_o26_1");

            OrnamentalPlant cactuSerruchoPlant = new OrnamentalPlant(NON_EXISTENT, cactuSerrucho);
            cactuSerruchoPlant.addPicture("https://url_image_o27_1");

            OrnamentalPlant cactuVariadosPlant = new OrnamentalPlant(IN_CONSERVATION, cactuVariados);
            cactuVariadosPlant.addPicture("https://url_image_o28_1");

            OrnamentalPlant cafePlant = new OrnamentalPlant(AVAILABLE, cafe);
            cafePlant.addPicture("https://url_image_o29_1");

            OrnamentalPlant calaPlant = new OrnamentalPlant(IN_CONSERVATION, cala);
            calaPlant.addPicture("https://url_image_o30_1");
            calaPlant.addPicture("https://url_image_o30_2");

            OrnamentalPlant calateaLargaPlant = new OrnamentalPlant(AVAILABLE, calateaLarga);
            calateaLargaPlant.addPicture("https://url_image_o31_1");
            calateaLargaPlant.addPicture("https://url_image_o31_2");

            OrnamentalPlant calateaZebrinaPlant = new OrnamentalPlant(IN_CONSERVATION, calateaZebrina);
            calateaZebrinaPlant.addPicture("https://url_image_o32_1");
            calateaZebrinaPlant.addPicture("https://url_image_o32_2");

            OrnamentalPlant canelaAspisdrastaPlant = new OrnamentalPlant(IN_CONSERVATION, canelaAspisdrasta);
            canelaAspisdrastaPlant.addPicture("https://url_image_o33_1");
            canelaAspisdrastaPlant.addPicture("https://url_image_o33_2");

            OrnamentalPlant cebollinPlant = new OrnamentalPlant(IN_CONSERVATION, cebollin);
            cebollinPlant.addPicture("https://url_image_o34_1");
            cebollinPlant.addPicture("https://url_image_o34_2");

            OrnamentalPlant chacateaPlant = new OrnamentalPlant(NON_EXISTENT, chacatea);
            chacateaPlant.addPicture("https://url_image_o35_1");
            chacateaPlant.addPicture("https://url_image_o35_2");

            OrnamentalPlant chefleraPlant = new OrnamentalPlant(AVAILABLE, cheflera);
            chefleraPlant.addPicture("https://url_image_o36_1");
            chefleraPlant.addPicture("https://url_image_o36_2");

            OrnamentalPlant chilijchiCeiboPlant = new OrnamentalPlant(AVAILABLE, chilijchiCeibo);
            chilijchiCeiboPlant.addPicture("https://url_image_o37_1");
            chilijchiCeiboPlant.addPicture("https://url_image_o37_2");

            OrnamentalPlant chirimoyaPlant = new OrnamentalPlant(AVAILABLE, chirimoya);
            chirimoyaPlant.addPicture("https://url_image_o38_1");
            chirimoyaPlant.addPicture("https://url_image_o38_2");

            OrnamentalPlant cidraPlant = new OrnamentalPlant(AVAILABLE, cidra);
            cidraPlant.addPicture("https://url_image_o39_1");
            cidraPlant.addPicture("https://url_image_o39_2");

            OrnamentalPlant cissusPlant = new OrnamentalPlant(AVAILABLE, cissus);
            cissusPlant.addPicture("https://url_image_o40_2");
            cissusPlant.addPicture("https://url_image_o40_1");

            OrnamentalPlant crasasPunteagudasPlant = new OrnamentalPlant(AVAILABLE, crasasPunteagudas);
            crasasPunteagudasPlant.addPicture("https://url_image_o41_1");
            crasasPunteagudasPlant.addPicture("https://url_image_o41_2");
            crasasPunteagudasPlant.addPicture("https://url_image_o41_3");

            OrnamentalPlant cucardaPlant = new OrnamentalPlant(IN_CONSERVATION, cucarda);
            cucardaPlant.addPicture("https://url_image_o42_1");
            cucardaPlant.addPicture("https://url_image_o42_2");
            cucardaPlant.addPicture("https://url_image_o42_3");

            OrnamentalPlant cuernoDeAlcePlant = new OrnamentalPlant(AVAILABLE, cuernoDeAlce);
            cuernoDeAlcePlant.addPicture("https://url_image_o43_1");
            cuernoDeAlcePlant.addPicture("https://url_image_o43_2");
            cuernoDeAlcePlant.addPicture("https://url_image_o43_3");

            OrnamentalPlant cupidoPlant = new OrnamentalPlant(NON_EXISTENT, cupido);
            cupidoPlant.addPicture("https://url_image_o44_1");
            cupidoPlant.addPicture("https://url_image_o44_2");
            cupidoPlant.addPicture("https://url_image_o44_3");

            OrnamentalPlant deditosDeNinoPlant = new OrnamentalPlant(NON_EXISTENT, deditosDeNino);
            deditosDeNinoPlant.addPicture("https://url_image_o45_1");
            deditosDeNinoPlant.addPicture("https://url_image_o45_2");
            deditosDeNinoPlant.addPicture("https://url_image_o45_3");

            OrnamentalPlant diamelaPlant = new OrnamentalPlant(AVAILABLE, diamela);
            diamelaPlant.addPicture("https://url_image_o46_1");
            diamelaPlant.addPicture("https://url_image_o46_2");
            diamelaPlant.addPicture("https://url_image_o46_3");

            OrnamentalPlant dolarPlant = new OrnamentalPlant(IN_CONSERVATION, dolar);
            dolarPlant.addPicture("https://url_image_o47_1");
            dolarPlant.addPicture("https://url_image_o47_2");
            dolarPlant.addPicture("https://url_image_o47_3");

            OrnamentalPlant dracaenaNativaPlant = new OrnamentalPlant(AVAILABLE, dracaenaNativa);
            dracaenaNativaPlant.addPicture("https://url_image_o48_1");
            dracaenaNativaPlant.addPicture("https://url_image_o48_2");

            OrnamentalPlant dracenaPlant = new OrnamentalPlant(IN_CONSERVATION, dracena);
            dracenaPlant.addPicture("https://url_image_o49_1");

            ornamentalPlantRepository.saveAll(
                    List.of(florDeNavidadPlant, acaciaOrridaPlant, agavePlant, ajiOrnamentalPlant, ajugaPlant, alamoPlant, aloePlant,
                            amarilisPlant, amorDeHombrePlant, anturioPlant, anturioGigantePlant, aspidrastaPlant, begoniaCebraPlant, begoniaRexPlant,
                            begoniaTuberosaPlant, bingoDeOroPlant, bouquetDeNoviaPlant, brachichitoPlant, bromeliaPlant, buganvillaPlant, cactuSanPedroPlant,
                            cactuColaDeRataPlant, cactuEstrellaDeMarPlant, cactuFlorDeMayoPlant, cactuLeopardoPlant, cactuMamilariaPlant, cactuNopalPlant,
                            cactuSerruchoPlant, cactuVariadosPlant, cafePlant, calaPlant, calateaLargaPlant, calateaZebrinaPlant, canelaAspisdrastaPlant,
                            cebollinPlant, chacateaPlant, chefleraPlant, chilijchiCeiboPlant, chirimoyaPlant, cidraPlant, cissusPlant, crasasPunteagudasPlant,
                            cucardaPlant, cuernoDeAlcePlant, cupidoPlant, deditosDeNinoPlant, diamelaPlant, dolarPlant, dracaenaNativaPlant, dracenaPlant)
            );
        };
    }
}
