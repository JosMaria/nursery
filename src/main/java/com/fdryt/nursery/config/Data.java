package com.fdryt.nursery.configuration;

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
