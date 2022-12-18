package com.fdryt.nursery.configuration;

import com.fdryt.nursery.domain.*;
import com.fdryt.nursery.repository.ClassificationRepository;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

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
            Identification acaciaOrrida = new Identification("acacia orrida", "acacia orrida", null, fabaceae);
            Identification agave = new Identification("agave", "agave tequilero", null, asparagaceae);
            Identification ajiOrnamental = new Identification("aji ornamental", "capsicum annuum", 'l', solanaceae);
            Identification ajuga = new Identification("ajuga", "ajuga reptans", null, lamiaceae);
            Identification alamo = new Identification("alamo", "populus x canadensis moench", null, salicaceae);
            Identification aloe = new Identification("aloe", "aloe barbadensis var. chinensis", null, asphodelaceae);
            Identification amarilis = new Identification("amarilis", "hippeastrum spp", null, amaryllidaceae);
            Identification amorDeHombre = new Identification("amor de hombre", "trasdecantia pallida", null, commelinaceae);
            Identification anturio = new Identification("anturio", "anthurium andreanum", null, araceae);
            Identification anturioGigante = new Identification("anturio gigante", "anthurium andreanum", null, araceae);
            Identification aspidrasta = new Identification("aspidrasta", "aspidiastra elatior", null, ruscaceae);
            Identification begoniaCebra = new Identification("begonia cebra", null, null, null);
            Identification begoniaRex = new Identification("begonia rex", "begonia rex", null, begoniaceae);
            Identification begoniaTuberosa = new Identification("begonias tuberosa", "begonia x tuberhybrida", null, begoniaceae);
            Identification bingoDeOro = new Identification("bingo de oro", "duranta erecta", null, verbenaceae);
            Identification bouquetDeNovia = new Identification("bouquet de novia", "plumeria rubra", 'l', apocynaceae);
            Identification brachichito = new Identification("brachichito", "brachychiton populneus", null, malvaceae);
            Identification bromelia = new Identification("bromelia", "bromelia adams", null, bromeliaceae);
            Identification buganvilla = new Identification("buganvilla", "boungainvillea spectabilis willd", null, nyctaginaceae);
            Identification cactuSanPedro = new Identification("cactu san pedro", "echinopsis pachanoi", null, cactaceae);
            Identification cactuColaDeRata = new Identification("cactu cola de rata", null, null, cactaceae);
            Identification cactuEstrellaDeMar = new Identification("cactu estrella de mar", null, null, cactaceae);
            Identification cactuFlorDeMayo = new Identification("cactu flor de mayo", "schlumbergera truncata", null, cactaceae);
            Identification cactuLeopardo = new Identification("cactu leopardo", null, null, null);
            Identification cactuMamilaria = new Identification("cactu mamilaria", "mammillaria spinosissima", null, cactaceae);
            Identification cactuNopal = new Identification("cactu nopal", "Opuntia ficus indica", null, cactaceae);
            Identification cactuSerrucho = new Identification("cactu serrucho", null, null, null);
            Identification cactuVariados = new Identification("cactu variados", null, null, null);
            Identification cafe = new Identification("cafe", "coffea arabica", null, rubiaceae);
            Identification cala = new Identification("cala", null, null, null);
            Identification calateaLarga = new Identification("calatea larga", "ctenanthe amabilis", null, marantaceae);
            Identification calateaZebrina = new Identification("calatea zebrina", "calathea zebrina", null, marantaceae);
            Identification canelaAspisdrasta = new Identification("canela aspisdrasta", null, null, null);
            Identification cebollin = new Identification("cebollin", null, null, null);
            Identification chacatea = new Identification("chacatea", "dodonaea viscosa", null, sapindaceae);
            Identification cheflera = new Identification("cheflera", "schefflera arboricola", null, araliaceae);
            Identification chilijchiCeibo = new Identification("chilijchi ceibo", "erythrina falcata", null, fabaceae);
            Identification chirimoya = new Identification("chirimoya", "annona cherimola mill", null, annonaceae);
            Identification cidra = new Identification("cidra", "citrus medica", null, rutaceae);
            Identification cissus = new Identification("cissus", "cissus alata", null, vitaceae);
            Identification crasasPunteagudas = new Identification("crasas punteagudas", null, null, null);
            Identification cucarda = new Identification("cucarda", "hibiscus rosasinensis", null, malvaceae);
            Identification cuernoDeAlce = new Identification("cuerno de alce", "platycerium bifurcatum", null, polypodiaceae);
            Identification cupido = new Identification("cupido", null, null, null);
            Identification deditosDeNino = new Identification("deditos de nino", "sedum pachyphylum", null, crassulaceae);
            Identification diamela = new Identification("diamela", null, null, null);
            Identification dolar = new Identification("dolar", "plectranthus nummularius", 'b', lamiaceae);
            Identification dracaenaNativa = new Identification("dracaena nativa", "dracaena fragans", null, asparagaceae);
            Identification dracena = new Identification("dracena", null, null, null);

            OrnamentalPlant florDeNavidadPlant = new OrnamentalPlant(AVAILABLE, florDeNavidad);
            OrnamentalPlant acaciaOrridaPlant = new OrnamentalPlant(AVAILABLE, acaciaOrrida);
            OrnamentalPlant agavePlant = new OrnamentalPlant(IN_CONSERVATION, agave);
            OrnamentalPlant ajiOrnamentalPlant = new OrnamentalPlant(AVAILABLE, ajiOrnamental);
            OrnamentalPlant ajugaPlant = new OrnamentalPlant(NON_EXISTENT, ajuga);
            OrnamentalPlant alamoPlant = new OrnamentalPlant(AVAILABLE, alamo);
            OrnamentalPlant aloePlant = new OrnamentalPlant(IN_CONSERVATION, aloe);
            OrnamentalPlant amarilisPlant = new OrnamentalPlant(NON_EXISTENT, amarilis);
            OrnamentalPlant amorDeHombrePlant = new OrnamentalPlant(AVAILABLE, amorDeHombre);
            OrnamentalPlant anturioPlant = new OrnamentalPlant(IN_CONSERVATION, anturio);
            OrnamentalPlant anturioGigantePlant = new OrnamentalPlant(AVAILABLE, anturioGigante);
            OrnamentalPlant aspidrastaPlant = new OrnamentalPlant(AVAILABLE, aspidrasta);
            OrnamentalPlant begoniaCebraPlant = new OrnamentalPlant(AVAILABLE, begoniaCebra);
            OrnamentalPlant begoniaRexPlant = new OrnamentalPlant(NON_EXISTENT, begoniaRex);
            OrnamentalPlant begoniaTuberosaPlant = new OrnamentalPlant(IN_CONSERVATION, begoniaTuberosa);
            OrnamentalPlant bingoDeOroPlant = new OrnamentalPlant(AVAILABLE, bingoDeOro);
            OrnamentalPlant bouquetDeNoviaPlant = new OrnamentalPlant(AVAILABLE, bouquetDeNovia);
            OrnamentalPlant brachichitoPlant = new OrnamentalPlant(NON_EXISTENT, brachichito);
            OrnamentalPlant bromeliaPlant = new OrnamentalPlant(IN_CONSERVATION, bromelia);
            OrnamentalPlant buganvillaPlant = new OrnamentalPlant(AVAILABLE, buganvilla);
            OrnamentalPlant cactuSanPedroPlant = new OrnamentalPlant(AVAILABLE, cactuSanPedro);
            OrnamentalPlant cactuColaDeRataPlant = new OrnamentalPlant(AVAILABLE, cactuColaDeRata);
            OrnamentalPlant cactuEstrellaDeMarPlant = new OrnamentalPlant(AVAILABLE, cactuEstrellaDeMar);
            OrnamentalPlant cactuFlorDeMayoPlant = new OrnamentalPlant(NON_EXISTENT, cactuFlorDeMayo);
            OrnamentalPlant cactuLeopardoPlant = new OrnamentalPlant(AVAILABLE, cactuLeopardo);
            OrnamentalPlant cactuMamilariaPlant = new OrnamentalPlant(AVAILABLE, cactuMamilaria);
            OrnamentalPlant cactuNopalPlant = new OrnamentalPlant(AVAILABLE, cactuNopal);
            OrnamentalPlant cactuSerruchoPlant = new OrnamentalPlant(NON_EXISTENT, cactuSerrucho);
            OrnamentalPlant cactuVariadosPlant = new OrnamentalPlant(IN_CONSERVATION, cactuVariados);
            OrnamentalPlant cafePlant = new OrnamentalPlant(AVAILABLE, cafe);
            OrnamentalPlant calaPlant = new OrnamentalPlant(IN_CONSERVATION, cala);
            OrnamentalPlant calateaLargaPlant = new OrnamentalPlant(AVAILABLE, calateaLarga);
            OrnamentalPlant calateaZebrinaPlant = new OrnamentalPlant(IN_CONSERVATION, calateaZebrina);
            OrnamentalPlant canelaAspisdrastaPlant = new OrnamentalPlant(IN_CONSERVATION, canelaAspisdrasta);
            OrnamentalPlant cebollinPlant = new OrnamentalPlant(IN_CONSERVATION, cebollin);
            OrnamentalPlant chacateaPlant = new OrnamentalPlant(NON_EXISTENT, chacatea);
            OrnamentalPlant chefleraPlant = new OrnamentalPlant(AVAILABLE, cheflera);
            OrnamentalPlant chilijchiCeiboPlant = new OrnamentalPlant(AVAILABLE, chilijchiCeibo);
            OrnamentalPlant chirimoyaPlant = new OrnamentalPlant(AVAILABLE, chirimoya);
            OrnamentalPlant cidraPlant = new OrnamentalPlant(AVAILABLE, cidra);
            OrnamentalPlant cissusPlant = new OrnamentalPlant(AVAILABLE, cissus);
            OrnamentalPlant crasasPunteagudasPlant = new OrnamentalPlant(AVAILABLE, crasasPunteagudas);
            OrnamentalPlant cucardaPlant = new OrnamentalPlant(IN_CONSERVATION, cucarda);
            OrnamentalPlant cuernoDeAlcePlant = new OrnamentalPlant(AVAILABLE, cuernoDeAlce);
            OrnamentalPlant cupidoPlant = new OrnamentalPlant(NON_EXISTENT, cupido);
            OrnamentalPlant deditosDeNinoPlant = new OrnamentalPlant(NON_EXISTENT, deditosDeNino);
            OrnamentalPlant diamelaPlant = new OrnamentalPlant(AVAILABLE, diamela);
            OrnamentalPlant dolarPlant = new OrnamentalPlant(IN_CONSERVATION, dolar);
            OrnamentalPlant dracaenaNativaPlant = new OrnamentalPlant(AVAILABLE, dracaenaNativa);
            OrnamentalPlant dracenaPlant = new OrnamentalPlant(IN_CONSERVATION, dracena);

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
